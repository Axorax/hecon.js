const hecon = {
    decode: (i) => {
        return (i+"").replace(/&#\d+;/gm,function(s) {
            return String.fromCharCode(s.match(/\d+/gm)[0]);
        })
    },
    encode: (k, t = false) => {
        if (t) {
            return k.replace(/./gm, function(s) {
                return (s.match(/[a-z0-9\s]+/i)) ? s : "&#" + s.charCodeAt(0) + ";";
            });
        } else {
            var a = [];
            for (var i=k.length-1;i>=0;i--) {
              a.unshift(['&#', k[i].charCodeAt(), ';'].join(''));
            }
            return a.join('');
        }
    }
}

module.exports = hecon;