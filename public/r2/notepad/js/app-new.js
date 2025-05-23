(function() {
    var e;
    e = function() {
        function f(g, h) {
            this['startInterval'] = 0xea60, this['init'](g, h);
        }
        return f['prototype']['init'] = function(i, j) {
            return this['$element'] = $(i), this['options'] = $['extend']({}, $['fn']['timeago']['defaults'], j), this['updateTime'](), this['startTimer']();
        }, f['prototype']['startTimer'] = function() {
            var f;
            return f = this, this['interval'] = setInterval(function() {
                return f['refresh']();
            }, this['startInterval']);
        }, f['prototype']['stopTimer'] = function() {
            return clearInterval(this['interval']);
        }, f['prototype']['restartTimer'] = function() {
            return this['stopTimer'](), this['startTimer']();
        }, f['prototype']['refresh'] = function() {
            return this['updateTime'](), this['updateInterval']();
        }, f['prototype']['updateTime'] = function() {
            var f;
            return f = this, this['$element']['findAndSelf'](this['options']['selector'])['each'](function() {
                var m;
                return m = f['timeAgoInWords']($(this)['attr'](f['options']['attr'])), $(this)['html'](m);
            });
        }, f['prototype']['updateInterval'] = function() {
            var f, o, p, q;
            if (this['$element']['findAndSelf'](this['options']['selector'])['length'] > 0x0) {
                if ('up' === this['options']['dir'] ? f = ':first' : 'down' === this['options']['dir'] && (f = ':last'), q = this['$element']['findAndSelf'](this['options']['selector'])['filter'](f)['attr'](this['options']['attr']), o = this['parse'](q), (p = this['getTimeDistanceInMinutes'](o)) >= 0x0 && p <= 0x2c && 0xea60 !== this['startInterval']) return this['startInterval'] = 0xea60, this['restartTimer']();
                if (p >= 0x2d && p <= 0x59 && 0x142440 !== this['startInterval']) return this['startInterval'] = 0x142440, this['restartTimer']();
                if (p >= 0x5a && p <= 0x9d7 && 0x1b7740 !== this['startInterval']) return this['startInterval'] = 0x1b7740, this['restartTimer']();
                if (p >= 0x9d8 && 0x2932e00 !== this['startInterval']) return this['startInterval'] = 0x2932e00, this['restartTimer']();
            }
        }, f['prototype']['timeAgoInWords'] = function(r) {
            var s;
            return s = this['parse'](r), '' + this['options']['lang']['prefixes']['ago'] + this['distanceOfTimeInWords'](s);
        }, f['prototype']['parse'] = function(t) {
            var u;
            return u = (u = (u = (u = (u = $['trim'](t))['replace'](/\.\d\d\d+/, ''))['replace'](/-/, '/')['replace'](/-/, '/'))['replace'](/T/, '\x20')['replace'](/Z/, '\x20UTC'))['replace'](/([\+\-]\d\d)\:?(\d\d)/, '\x20$1$2'), new Date(u);
        }, f['prototype']['getTimeDistanceInMinutes'] = function(v) {
            var w;
            return w = new Date()['getTime']() - v['getTime'](), Math['round'](Math['abs'](w) / 0x3e8 / 0x3c);
        }, f['prototype']['distanceOfTimeInWords'] = function(x) {
            var y;
            return 0x0 === (y = this['getTimeDistanceInMinutes'](x)) ? '' + this['options']['lang']['prefixes']['lt'] : 0x1 === y ? '1\x20' + this['options']['lang']['units']['minute'] + this['options']['lang']['suffix'] : y >= 0x2 && y <= 0x2c ? y + '\x20' + this['options']['lang']['units']['minutes'] + this['options']['lang']['suffix'] : y >= 0x2d && y <= 0x59 ? '\x201\x20' + this['options']['lang']['units']['hour'] + this['options']['lang']['suffix'] : y >= 0x5a && y <= 0x59f ? '\x20' + Math['round'](y / 0x3c) + '\x20' + this['options']['lang']['units']['hours'] + this['options']['lang']['suffix'] : y >= 0x5a0 && y <= 0x9d7 ? '1\x20' + this['options']['lang']['units']['day'] : y >= 0x9d8 && y <= 0xa8bf ? Math['round'](y / 0x5a0) + '\x20' + this['options']['lang']['units']['days'] + this['options']['lang']['suffix'] : y >= 0xa8c0 && y <= 0x1517f ? '\x201\x20' + this['options']['lang']['units']['month'] + this['options']['lang']['suffix'] : y >= 0x15180 && y <= 0x8051f ? Math['round'](y / 0xa8c0) + '\x20' + this['options']['lang']['units']['months'] + this['options']['lang']['suffix'] : y >= 0x80520 && y <= 0x9ff5f ? '\x201\x20' + this['options']['lang']['units']['year'] + this['options']['lang']['suffix'] : y >= 0x9ff60 && y <= 0xdf3df ? this['options']['lang']['prefixes']['over'] + '\x201\x20' + this['options']['lang']['units']['year'] + this['options']['lang']['suffix'] : y >= 0xdf3e0 && y <= 0x100a3f ? this['options']['lang']['prefixes']['almost'] + '\x202\x20' + this['options']['lang']['units']['years'] + this['options']['lang']['suffix'] : '\x20' + Math['round'](y / 0x80520) + '\x20' + this['options']['lang']['units']['years'] + this['options']['lang']['suffix'];
        }, f;
    }(), $['fn']['timeago'] = function(z) {
        return null == z && (z = {}), this['each'](function() {
            var A, B;
            return (B = (A = $(this))['data']('timeago')) ? 'string' == typeof z ? B[z]() : void 0x0 : A['data']('timeago', new e(this, z));
        });
    }, $['fn']['findAndSelf'] = function(C) {
        return this['find'](C)['add'](this['filter'](C));
    }, $['fn']['timeago']['Constructor'] = e, $['fn']['timeago']['defaults'] = {
        'selector': 'time',
        'attr': 'stamp',
        'dir': 'up',
        'lang': {
            'units': {
                'second': 'second',
                'seconds': 'seconds',
                'minute': 'minute',
                'minutes': 'minutes',
                'hour': 'hour',
                'hours': 'hours',
                'day': 'day',
                'days': 'days',
                'month': 'month',
                'months': 'months',
                'year': 'year',
                'years': 'years'
            },
            'prefixes': {
                'lt': 'just\x20now',
                'over': 'over',
                'almost': 'almost',
                'ago': ''
            },
            'suffix': '\x20ago'
        }
    };
} ['call'](this));
$('.toast').on('click', function() {
    console.log('clICKED')
    document.querySelector('.toast').style.display='none'
})
var D, E, F, G, H, I, J, K, L = $('#n_title'),
    M = $('#n_text'),
    N = localStorage['getItem']('current'),
    O = localStorage['getItem']('pref_sort');
if (U(), bH(), N in localStorage && (a9(), ab(), ac()), 'pref_font' in localStorage) {
    var P = JSON['parse'](localStorage['getItem']('pref_font'));
    G = P['ff'], $('#font_family')['val'](G), H = P['fz'], $('#font_size')['val'](H), I = P['fw'], $('#font_weight')['val'](I), J = P['fs'], $('#font_style')['val'](J), K = P['fl'], $('#font_line')['val'](K), bx(M);
}

function Q() {
    N = a3(), L['val'](''), M['val'](''), R(), U(), a8();
}

function R() {
    var S = {
        't1': L['val']()['trim'](),
        't2': M['val'](),
        't3': a4()
    };
    N || (N = a3()), localStorage['setItem'](N, JSON['stringify'](S)), U(), a8();
}

function T() {
    localStorage['removeItem'](N), localStorage['removeItem']('current'), $('#' + N)['remove'](), L['val'](''), M['val'](''), aQ();
}

function U() {
    $('.notes')['empty']();
    for (var V = 0x0; V < localStorage['length']; V++)
        if ('note-' == localStorage['key'](V)['substring'](0x0, 0x5)) {
            var W = JSON['parse'](localStorage['getItem'](localStorage['key'](V)));
            if ('' == W['t1']) var X = '<b>Untitled\x20Note</b>';
            else X = '<b>' + a5(W['t1']) + '</b>';
            if ('' == W['t2']) var Y = '<p>Blank</p>';
            else Y = '<p>' + a5(W['t2']) + '</p>';
            var Z = X + Y + ('<time\x20stamp=\x22' + W['t3'] + '\x22></time>');
            $('.notes')['append']('<li\x20id=\x22' + localStorage['key'](V) + '\x22>' + Z + '<li>');
        } $('time')['timeago'](), $('.notes>li:empty')['remove'](), ab(), 'pref_sort' in localStorage && aJ(O = localStorage['getItem']('pref_sort')), aQ();
}

function a0() {
    for (var a1 = [], a2 = 0x0; a2 < localStorage['length']; a2++) 'note-' == localStorage['key'](a2)['substring'](0x0, 0x5) && a1['push'](localStorage['key'](a2));
    for (a2 = 0x0; a2 < a1['length']; a2++) localStorage['removeItem'](a1[a2]);
    U();
}

function a3() {
    return 'note-' + Date['now']();
}

function a4() {
    return new Date()['toISOString']();
}

function a5(a6) {
    var a7 = document['createElement']('textarea');
    return a7['textContent'] = a6, a7['innerHTML'];
}

function a8() {
    localStorage['setItem']('current', N), ab();
}

function a9() {
    var aa = JSON['parse'](localStorage['getItem'](N));
    L['val'](aa['t1']), M['val'](aa['t2']);
}

function ab() {
    $('#' + N)['addClass']('active')['siblings']()['removeClass']('active');
}

function ac() {
    var ad = function() {
        var ae = !![];
        return function(af, ag) {
            var ah = ae ? function() {
                if (ag) {
                    var ai = ag['apply'](af, arguments);
                    ag = null;
                    return ai;
                }
            } : function() {};
            ae = ![];
            return ah;
        };
    }();
    var aj = ad(this, function() {
        var ak = function() {};
        var al;
        try {
            var am = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
            al = am();
        } catch (an) {
            al = window;
        }/*
        if (!al['console']) {
            al['console'] = function(ao) {
                var ad = {};
                ad['log'] = ao;
                ad['warn'] = ao;
                ad['debug'] = ao;
                ad['info'] = ao;
                ad['error'] = ao;
                ad['exception'] = ao;
                ad['trace'] = ao;
                return ad;
            }(ak);
        } else {
            al['console']['log'] = ak;
            al['console']['warn'] = ak;
            al['console']['debug'] = ak;
            al['console']['info'] = ak;
            al['console']['error'] = ak;
            al['console']['exception'] = ak;
            al['console']['trace'] = ak;
        }*/
    });
    aj();
    var aq = M['val']()['replace'](/\s\s+|\n/gm, '\x20')['match'](/\w+/gm);
    numWords = null == aq ? 0x0 : aq['length'], $('#wordsNum')['html']('Words:\x20' + numWords);
}

function ar() {
    var as = M['prop']('selectionEnd'),
        at = M['val'](),
        au = (at = at['substring'](0x0, as))['split']('\x0a')['length'],
        av = at['split']('\x0a')[au - 0x1]['length'] + 0x1;
    $('#caretPos')['html']('Line\x20' + au + ',\x20Column\x20' + av);
}

function aw() {
    var ax = M['prop']('selectionStart'),
        ay = M['prop']('selectionEnd'),
        az = M['val']()['substring'](ax, ay);
    E = ax, F = ay, D = az;
}

function aA() {
    $('.container')['toggleClass']('fullscreen'), $('#winSize')['toggleClass']('i-shrink')['toggleClass']('i-fullscreen'), $('#winCheck')['toggleClass']('i-check');
}

$('#new_btn,\x20#file_new')['click'](function() {
    Q();
}), $('#n_text,\x20#n_title')['on']('change\x20keyup\x20paste', function() {
    R();
}), M['on']('change\x20keyup\x20paste', function() {
    ac(), be();
}), $('#del_btn')['click'](function() {
    $('#confirm,\x20.mask')['toggleClass']('open'), $('#confirm\x20.modal-body>p')['html']('Are\x20you\x20sure\x20you\x20want\x20to\x20delete\x20this\x20note?'), $('.confirm-1')['html']('Yes')['attr']('id', 'del_yes'), $('.confirm-2')['html']('No');
}), $('#confirm')['on']('click', '#del_yes', function() {
    T(), bF('Deleted');
}), M['on']('click\x20keyup', function() {
    ar();
}), M['on']('blur', function() {
    $('#caretPos')['empty']();
}), $('.stay-focus,\x20#char_list,\x20#emoji_list,\x20.mask')['click'](function() {
    M['selectRange'](E, F);
}), $('.container')['on']('mouseup', function() {
    aw();
}), $(document)['ready'](function() {
    $('.notes')['on']('click', 'li', function() {
        N = $(this)['attr']('id');
        var aB = JSON['parse'](localStorage['getItem'](N));
        L['val'](aB['t1']), M['val'](aB['t2']), a8(), ac(), bg();
    });
}), $['fn']['selectRange'] = function(aC, aD) {
    return this['each'](function() {
        if (this['setSelectionRange']) this['focus'](), this['setSelectionRange'](aC, aD);
        else if (this['createTextRange']) {
            var aE = this['createTextRange']();
            aE['collapse'](!0x0), aE['moveEnd']('character', aD), aE['moveStart']('character', aC), aE['select']();
        }
    });
}, $('.fullscreen_btn')['click'](function() {
    aA();
}), $('#isWrap')['click'](function() {
    $('#isWrap>i')['toggleClass']('i-check'), $('#isWrap>i')['hasClass']('i-check') ? ($('#n_text')['removeClass']('wrap-off'), localStorage['setItem']('pref_wrap', 0x1)) : ($('#n_text')['addClass']('wrap-off'), localStorage['setItem']('pref_wrap', 0x0));
});
var aF = localStorage['getItem']('pref_wrap');
0x0 == aF && (M['addClass']('wrap-off'), $('#isWrap>i')['removeClass']('i-check')), $('#isSpell')['click'](function() {
    if ($('#isSpell>i')['toggleClass']('i-check'), $('#isSpell>i')['hasClass']('i-check')) $('#n_text')['prop']('spellcheck', !0x0), localStorage['setItem']('pref_spell', 0x1);
    else {
        $('#n_text')['prop']('spellcheck', !0x1), localStorage['setItem']('pref_spell', 0x0);
        var aG = $('#n_text')['val']();
        $('#n_text')['val']('')['val'](aG);
    }
});
var aH = localStorage['getItem']('pref_spell');
0x0 == aH && (M['prop']('spellcheck', !0x1), $('#isSpell>i')['removeClass']('i-check')), $('#isStatus')['click'](function() {
    $('#isStatus>i')['toggleClass']('i-check'), $('#isStatus>i')['hasClass']('i-check') ? ($('.editor')['removeClass']('no-statusbar'), localStorage['setItem']('pref_sbar', 0x1)) : ($('.editor')['addClass']('no-statusbar'), localStorage['setItem']('pref_sbar', 0x0));
});
var aI = localStorage['getItem']('pref_sbar');

function aJ(aK) {
    if ('AZ' == aK) $('.notes>li')['sort'](function(aL, aM) {
        return $(aM)['find']('b')['text']()['toLowerCase']() < $(aL)['find']('b')['text']()['toLowerCase']() ? 0x1 : -0x1;
    })['each'](function() {
        $('.notes')['append'](this);
    });
    else if ('Date' == aK) $('.notes>li')['sort'](function(aN, aO) {
        return new Date($(aN)['find']('time')['attr']('stamp')) > new Date($(aO)['find']('time')['attr']('stamp')) ? 0x1 : -0x1;
    })['each'](function() {
        $('.notes')['prepend'](this);
    });
    else if ('None' == aK) return;
}
0x0 == aI && ($('.editor')['addClass']('no-statusbar'), $('#isStatus>i')['removeClass']('i-check')), $('#sortAZ')['click'](function() {
    $('#sortAZ>i')['addClass']('i-check'), $('#sortNone>i,\x20#sortDate>i')['removeClass']('i-check'), localStorage['setItem']('pref_sort', 'AZ'), aJ('AZ'), O = localStorage['getItem']('pref_sort');
}), $('#sortDate')['click'](function() {
    $('#sortDate>i')['addClass']('i-check'), $('#sortAZ>i,\x20#sortNone>i')['removeClass']('i-check'), localStorage['setItem']('pref_sort', 'Date'), aJ('Date'), O = localStorage['getItem']('pref_sort');
}), $('#sortNone')['click'](function() {
    $('#sortNone>i')['addClass']('i-check'), $('#sortAZ>i,\x20#sortDate>i')['removeClass']('i-check'), localStorage['setItem']('pref_sort', 'None'), U(), O = localStorage['getItem']('pref_sort');
}), 'AZ' == O ? ($('#sortAZ>i')['addClass']('i-check'), $('#sortNone>i,\x20#sortDate>i')['removeClass']('i-check')) : 'Date' == O ? ($('#sortDate>i')['addClass']('i-check'), $('#sortAZ>i,\x20#sortNone>i')['removeClass']('i-check')) : 'None' == O && ($('#sortNone>i')['addClass']('i-check'), $('#sortAZ>i,\x20#sortDate>i')['removeClass']('i-check')), $('#view_compact')['click'](function() {
    $('.saved-notes')['addClass']('compact-view'), $('#view_compact>i')['addClass']('i-check'), $('#view_all>i')['removeClass']('i-check'), localStorage['setItem']('pref_view', 'compact');
}), $('#view_all')['click'](function() {
    $('.saved-notes')['removeClass']('compact-view'), $('#view_all>i')['addClass']('i-check'), $('#view_compact>i')['removeClass']('i-check'), localStorage['removeItem']('pref_view');
});
var aP = localStorage['getItem']('pref_view');

function aQ() {
    $('.notes')['is'](':empty') && $('.notes')['html']('<span>No\x20saved\x20notes.</span>');
}

function aR() {
    var aS = $('#file_open')['get'](0x0)['files'][0x0],
        aT = new FileReader();
    var filename = aS.name
    aT['onload'] = function(aU) {
        var aT = aU['target']['result'];
        console.log('here')
        console.log(filename)
        var notename = filename.split('.')[0]
        M['val'](aT), L['val'](notename), R(), be(); // M is the content, L is the name and set them
    }, aT['readAsText'](aS, 'UTF-8');
}

function aW(aX, aY, aZ) {
    var b0 = aX,
        b1 = new Blob([aY], {
            'type': aZ
        });
    if ('undefined' != typeof navigator && navigator['msSaveOrOpenBlob']) navigator['msSaveOrOpenBlob'](b1, b0);
    else {
        var b2 = document['createElement']('a');
        b2['download'] = b0, b2['href'] = window['URL']['createObjectURL'](b1), b2['target'] = '_blank', b2['style']['display'] = 'none', document['body']['appendChild'](b2), b2['click'](), document['body']['removeChild'](b2);
    }
}

function b3() {
    var b4 = document['title'];
    '' == L['val']() ? document['title'] = '\u00a0' : document['title'] = L['val'](), getWin = a5(M['val']())['replace'](/\n/gm, '<br>'), $('#print')['html'](getWin), bx($('#print')), window['print'](), document['title'] = b4;
}
'compact' == aP && ($('.saved-notes')['addClass']('compact-view'), $('#view_all>i')['removeClass']('i-check'), $('#view_compact>i')['addClass']('i-check')), $('#file_open')['on']('change', function() {
    be(), aR();
}), $('#file_save')['click'](function() {
    R(), bF('Saved');
}), $('#file_download')['click'](function() {
    $('#confirm,\x20.mask')['toggleClass']('open'), $('#confirm\x20.modal-head>b')['html']('Save\x20As'), '' == L['val']() ? tit = 'Untitled\x20Note.txt' : tit = L['val']() + '.txt', $('#confirm\x20.modal-body>p')['html']('<div\x20class=\x22form-group\x22><label\x20class=\x22w-30\x22>Filename</label><input\x20id=\x22filename_box\x22\x20class=\x22input\x20w-70\x22\x20value=\x22' + tit + '\x22\x20spellcheck=\x22false\x22></div>'), $('.confirm-1')['html']('Save')['attr']('id', 'download_yes'), $('.confirm-2')['html']('Cancel');
}), $('#confirm')['on']('click', '#download_yes', function() {
    aW($('#filename_box')['val'](), M['val']()['replace'](/\n/g, '\x0d\x0a'), 'text/plain');
}), $('#file_print')['click'](function() {
    b3();
});
var b5, b6 = function() {
        var b8 = [],
            b9 = 0x0;
        return {
            'remember': function(ba) {
                b8[b9 - 0x1] !== ba && (b8['splice'](b9, 0xa), b8['push'](ba), b8['splice'](0x0, b8['length'] - 0xa), b9 = b8['length']);
            },
            'undo': function() {
                if (b9 > 0x1) return b8[--b9 - 0x1];
            },
            'redo': function() {
                if (b9 < b8['length']) return b8[b9++];
            },
            'forget': function() {
                b8 = [];
            }
        };
    }(),
    b7 = function() {
        var bb = 0x0;
        return function(bc, bd) {
            clearTimeout(bb), bb = setTimeout(bc, bd);
        };
    }();

function be() {
    var bf = M['val']();
    b6['remember'](bf);
}

function bg() {
    b6['forget']();
}

function bh() {
    var bi = b6['undo']();
    void 0x0 !== bi && M['val'](bi), R();
}

function bj() {
    var bk = b6['redo']();
    void 0x0 !== bk && M['val'](bk), R();
}

function bl(bm) {
    var bn = document['createElement']('textarea');
    document['body']['appendChild'](bn), bn['value'] = bm, bn['select'](), document['execCommand']('copy'), document['body']['removeChild'](bn);
}

function bo() {
    '' != D && (document['execCommand']('delete'), F = E), D = '';
}

function bp(bq) {
    bo();
    var br = bq['length'];
    E = F += br;
    var bs = M['get'](0x0),
        bt = bs['selectionStart'];
    bs['value'] = bs['value']['slice'](0x0, bt) + bq + bs['value']['slice'](bt), bs['setSelectionRange'](bt + 0x1, bt + 0x1), be(), R();
}

function bu() {
    var bv = new Date(),
        bw = bv['getHours']();
    return a = bv['getMinutes'](), r = bw >= 0xc ? 'pm' : 'am', n = (bw = (bw %= 0xc) || 0xc) + ':' + (a = a < 0xa ? '0' + a : a) + '\x20' + r, bv['getMonth']() + 0x1 + '/' + bv['getDate']() + '/' + bv['getFullYear']() + '\x20' + n;
}

function bx(by) {
    by['css']({
        'font-family': G,
        'font-size': H,
        'font-weight': I,
        'font-style': J,
        'line-height': K
    });
}

function bz() {
    $['getScript']('https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.5/jszip.min.js', function() {
        for (var bA = new JSZip(), bB = 0x0; bB < localStorage['length']; bB++)
            if ('note-' == localStorage['key'](bB)['substring'](0x0, 0x5)) {
                var bC = JSON['parse'](localStorage['getItem'](localStorage['key'](bB)));
                if ('' == bC['t1']) var bD = 'Untitled\x20Note\x20' + bB;
                else bD = bC['t1'];
                bA['file'](bD + '.txt', bC['t2']['replace'](/\n/g, '\x0d\x0a'));
            } bA['generateAsync']({
            'type': 'blob'
        })['then'](function(bE) {
            aW('backup.zip', bE, 'application/zip');
        }), bF('Backup\x20downloaded');
    });
}

function bF(bG, msdelay) {
    if(!msdelay) msdelay = 0x7d0 // 2000
    $('.toast-content')['html'](bG), $('.toast')['show']()['delay'](msdelay)['fadeOut'](0xfa);
}

function bH() {
    $(window)['width']() <= 0x3e0 ? ($('.container')['hasClass']('pulled') ? $('.mob-mask')['removeClass']('open') : ($('.mob-mask')['addClass']('open'), $('.mob-mask')['click'](function() {
        $('.container')['addClass']('pulled'), $('.mob-mask')['removeClass']('open');
    })), $(document)['ready'](function() {
        $('.notes')['on']('click', 'li', function() {
            $('.container')['addClass']('pulled'), $('.mob-mask')['removeClass']('open');
        });
    }), $(document)['ready'](function() {
        $('#confirm')['on']('click', '#del_yes', function() {
            $('.container')['removeClass']('pulled'), $('.mob-mask')['addClass']('open');
        });
    })) : ($('.mob-mask')['removeClass']('open'), $(document)['ready'](function() {
        $('.notes')['on']('click', 'li', function() {
            $('.container')['removeClass']('pulled');
        });
    }));
}
M['on']('keyup', function() {
    b7(function() {
        be();
    }, 0x3e8);
}), $('#edit_undo')['click'](function() {
    bh();
}), $('#edit_redo')['click'](function() {
    bj();
}), $('#edit_cut')['click'](function() {
    document['execCommand']('copy'), document['execCommand']('delete'), R();
}), $('#edit_copy')['click'](function() {
    bl(D), bF('Copied');
}), $('#edit_del')['click'](function() {
    bo(), R();
}), $('#edit_sel')['click'](function() {
    E = 0x0, F = M['val']()['length'];
}), $('#edit_fnr')['click'](function() {
    $('#find_replace,\x20.mask')['toggleClass']('open');
}), $('#replaceall_btn')['click'](function() {
    be();
    var bI = M['val'](),
        bJ = $('#find_box')['val']()['replace'](/([.*+?^=!:${}()|\[\]\/\\])/g, '\x5c$1'),
        bK = $('#replace_box')['val']();
    if ($('#match_case')['prop']('checked')) var bL = 'g';
    else bL = 'gi';
    if ($('#whole_words')['prop']('checked')) var bM = new RegExp('\x5cb' + bJ + '\x5cb', bL);
    else bM = new RegExp(bJ, bL);
    counter = 0x0;
    var bN = bI['match'](bM);
    counter = null != bN ? bN['length'] : 0x0, bI = bI['replace'](bM, bK), M['val'](bI), 0x0 == counter ? bF('No\x20matches\x20found') : bF('Made\x20' + counter + '\x20replacements'), be(), R();
}), $('#ins_time')['click'](function() {
    bp(bu());
}), $('.charlist\x20li')['click'](function() {
    $(this)['addClass']('chosen')['siblings']()['removeClass']('chosen'), b5 = $(this)['html']();
}), $('#ins_char')['click'](function() {
    $('#char_list,\x20.mask')['toggleClass']('open'), b5 = '', $('.charlist\x20li')['removeClass']('chosen');
}), $('#ins_emo')['click'](function() {
    $('#emoji_list,\x20.mask')['toggleClass']('open'), b5 = '', $('.charlist\x20li')['removeClass']('chosen');
}), $('.ins_char_btn')['click'](function() {
    bp(b5);
}), $('#font_btn')['click'](function() {
    $('#font_format,\x20.mask')['toggleClass']('open');
}), $('#font_family,\x20#font_size,\x20#font_weight,\x20#font_style,\x20#font_line')['on']('change', function() {
    G = $('#font_family')['val'](), H = $('#font_size')['val'](), I = $('#font_weight')['val'](), J = $('#font_style')['val'](), K = $('#font_line')['val'](), bx(M);
    var bO = {
        'ff': G,
        'fz': H,
        'fw': I,
        'fs': J,
        'fl': K
    };
    localStorage['setItem']('pref_font', JSON['stringify'](bO));
}), $('#reset_font')['click'](function() {
    M['removeAttr']('style'), localStorage['removeItem']('pref_font'), $('#font_family')['val']('inherit'), $('#font_size')['val']('11pt'), $('#font_weight')['val']('400'), $('#font_style')['val']('Normal'), $('#font_line')['val']('1.8');
}), $('#about_btn')['click'](function() {
    $('#about_app,\x20.mask')['toggleClass']('open');
}), $('#backup_btn')['click'](function() {
    bz();
}), $('#clear_btn')['click'](function() {
    $('#confirm,\x20.mask')['toggleClass']('open'), $('#confirm\x20.modal-body>p')['html']('Are\x20you\x20sure\x20you\x20want\x20to\x20permanently\x20delete\x20all\x20your\x20saved\x20notes?'), $('.confirm-1')['html']('Yes')['attr']('id', 'clear_yes'), $('.confirm-2')['html']('No');
}), $('#confirm')['on']('click', '#clear_yes', function() {
    a0();
}), $(window)['bind']('keydown', function(bP) {
    if (bP['ctrlKey'] || bP['metaKey']) switch (String['fromCharCode'](bP['which'])['toLowerCase']()) {
        case 'o':
            bP['preventDefault'](), $('#file_open')['trigger']('click');
            break;
        case 's':
            bP['preventDefault'](), R(), bF('Saved');
            break;
        case 'p':
            bP['preventDefault'](), b3();
            break;
        case 'z':
            bP['preventDefault'](), bh();
            break;
        case 'y':
            bP['preventDefault'](), bj();
    }
    if ((bP['ctrlKey'] || bP['metaKey']) && bP['shiftKey']) switch (String['fromCharCode'](bP['which'])['toLowerCase']()) {
        case 's':
            bP['preventDefault'](), $('#file_download')['trigger']('click');
            break;
        case 'd':
            bP['preventDefault'](), $('#ins_time')['trigger']('click');
            break;
        case 'c':
            bP['preventDefault'](), $('#ins_char')['trigger']('click');
            break;
        case 'e':
            bP['preventDefault'](), $('#ins_emo')['trigger']('click');
            break;
        case 'r':
            bP['preventDefault'](), $('#edit_fnr')['trigger']('click');
            break;
        case 'g':
            bP['preventDefault'](), $('#font_btn')['trigger']('click');
            break;
        case 'f':
            bP['preventDefault'](), aA();
    }
}), $('a[href=\x22#\x22]')['click'](function(bQ) {
    bQ['preventDefault'] ? bQ['preventDefault']() : bQ['returnValue'] = !0x1;
}), $('#hide-sky')['click'](function() {
    $('.container')['toggleClass']('no-ad');
}), $('.modal-x,\x20.confirm-1,\x20.confirm-2')['click'](function() {
    $('.modal,\x20.mask')['removeClass']('open');
}), $('body')['ready'](function() {
    $(document)['on']('click', '.menu>li>a', function(bR) {
        $(this)['addClass']('active'), $(this)['siblings']()['show'](), $(this)['parent']()['siblings']()['each'](function(bS, bT) {
            $(bT)['find']('.menu>li>ul')['hide']();
        });
    });
}), $('body')['mouseup'](function(bU) {
    var bV = $('.menu>li>ul');
    bV['is'](bU['target']) || (bV['hide'](), $('.menu>li>a')['removeClass']('active'));
}), $('.saved-notes')['ready'](function() {
    $('#n_search')['keyup'](function() {
        var bW = $(this)['val'](),
            bX = new RegExp(bW, 'gi');
        $('.notes>li')['fadeOut'](0x64)['each'](function() {
            $(this)['html']()['match'](bX) && $(this)['stop']()['show']();
        });
    });
}), $('#nav-btn')['click'](function() {
    $('.container')['toggleClass']('pulled'), bH();
}), $(window)['on']('resize', function() {
    bH();
}), be();

    /* YO LIKE YO LIKE YO LIKE YO LIKE YO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
    const COOKIE_NAME = "visitednotepadbe4" // its not actually a cookie its local storage but WHO CARES???????!?!!?
    const POSITIVE_VALUE = "INDEED"
    if (!localStorage.getItem(COOKIE_NAME)) {
        bF('Welcome to Rafdo Notepad, a notepad app for taking notes. Notes are auto-saved to your browser, but you can always go to File-->Save As and download them to your computer. On the left it shows all your notes and you can create another by clicking Create new. You can use Rafdo Notepad just to import a note from your computer (File-->Open), edit it, and then save it to your computer again (File-->Save As) if you want to.', 60000)
        localStorage.setItem(COOKIE_NAME, POSITIVE_VALUE)
    }