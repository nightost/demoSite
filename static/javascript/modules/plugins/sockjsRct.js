var SockReconnect, root,
    __bind = function (fn, me) {
        return function () {
            return fn.apply(me, arguments);
        };
    };

SockReconnect = (function () {
    SockReconnect.prototype.reconnect = {
        reconnecting: false ,    //Are we reconnecting ?
        do_not_reconnect: false ,//Do (not) try to reconnect.

        reload_after_n: true,
        max_retries: 30 ,//Try to reconnect this many times before reloading.
        reset_mult: 6  , //After n attemps, restore the timeout to default.

        //Default timeout in ms.
        retry_timeout_ms: 1500 + Math.floor(Math.random() * 60),
        //After a failed attempt, multiply the current timeout by this much.
        retry_multiplier: 2,

        retry_curr_multiplier: 0,
        retry_curr_timeout: 0,
        retry_count: 0 //Attempts so far.
    };

    SockReconnect.prototype.conn = null;

    function SockReconnect(cli_path, options, status_cb, cli_onmessage, cli_onopen, cli_onclose) {
        this.cli_path = cli_path;
        this.status_cb = status_cb;
        this.cli_onmessage = cli_onmessage;
        this.cli_onopen = cli_onopen;
        this.cli_onclose = cli_onclose;
        this.on_close = __bind(this.on_close, this);
        this.on_open = __bind(this.on_open, this);
        this.send = __bind(this.send, this);
        this.reconnect_try = __bind(this.reconnect_try, this);
        this.reconnect_reset = __bind(this.reconnect_reset, this);
        this.connect = __bind(this.connect, this);
        this.update_status = __bind(this.update_status, this);
        $.extend(this.reconnect, options);
    }

    SockReconnect.prototype.update_status = function () {
        if (this.reconnect.reconnecting) {
            if (this.status_cb != null) {
                return this.status_cb('reconnecting');
            }
        } else if (this.conn === null || this.conn.readyState !== SockJS.OPEN) {
            if (this.status_cb != null) {
                return this.status_cb('disconnected');
            }
        } else {
            if (this.status_cb != null) {
                return this.status_cb('connected');
            }
        }
    };

    SockReconnect.prototype.connect = function () {
        if (this.conn != null) {
            this.conn.close();
            this.conn = null;
        }
        this.conn = new SockJS(this.cli_path);
        if (this.status_cb != null) {
            this.status_cb('connecting');
        }
        this.conn.onopen = this.on_open;
        this.conn.onclose = this.on_close;
        return this.conn.onmessage = this.cli_onmessage;
    };

    SockReconnect.prototype.reconnect_reset = function () {
        this.reconnect.reconnecting = false;
        this.reconnect.retry_curr_timeout = 0;
        this.reconnect.retry_curr_multipler = 0;
        return this.reconnect.retry_count = 0;
    };

    SockReconnect.prototype.reconnect_try = function (connfunc) {
        var callback;
        if (this.reconnect.retry_count === this.reconnect.max_retries) {
            this.reconnect.reconnecting = false;
            if (this.reconnect.reload_after_n) {
                window.location.reload(true);
            }
            return;
        }
        if (!this.reconnect.reconnecting) {
            this.reconnect.reconnecting = true;
            this.reconnect.retry_curr_timeout = this.reconnect.retry_timeout_ms;
            this.reconnect.retry_curr_multipler = 1;
            this.reconnect.retry_count = 1;
            return connfunc();
        } else {
            this.reconnect.retry_count += 1;
            callback = (function (_this) {
                return function () {
                    _this.reconnect.retry_curr_timeout *= _this.reconnect.retry_multiplier;
                    _this.reconnect.retry_curr_multipler += 1;
                    if (_this.reconnect.retry_curr_multipler === _this.reconnect.reset_mult) {
                        _this.reconnect.retry_curr_timeout = _this.reconnect.retry_timeout_ms;
                        _this.reconnect.retry_curr_multipler = 1;
                    }
                    return connfunc();
                };
            })(this);
            return setTimeout(callback, this.reconnect.retry_curr_timeout);
        }
    };

    SockReconnect.prototype.send = function (data) {
        return this.conn.send(data);
    };

    SockReconnect.prototype.on_open = function () {
        this.reconnect_reset();
        this.update_status();
        if (this.cli_onopen != null) {
            return this.cli_onopen();
        }
    };

    SockReconnect.prototype.on_close = function () {
        this.conn = null;
        this.update_status();
        if (this.cli_onclose != null) {
            this.cli_onclose();
        }
        if (this.reconnect.do_not_reconnect) {
            return;
        }
        return this.reconnect_try(this.connect);
    };

    return SockReconnect;

})();

root = typeof exports !== "undefined" && exports !== null ? exports : this;

root.SockReconnect = SockReconnect;