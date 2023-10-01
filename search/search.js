var jieba_dict = [['23',0,'m'],['404',0,'m'],['a',0,'x'],['carmen',0,'eng'],['co',0,'eng'],['confirm',0,'eng'],['continue',0,'eng'],['coscon',0,'eng'],['create',0,'eng'],['email',0,'eng'],['enter',0,'eng'],['found',0,'eng'],['founder',0,'eng'],['home',0,'eng'],['not',0,'eng'],['official',0,'eng'],['openteens',0,'eng'],['org',0,'eng'],['page',0,'eng'],['password',0,'eng'],['richard',0,'eng'],['sign',0,'eng'],['up',0,'eng'],['username',0,'eng'],['your',0,'eng'],['一个',142747,'m'],['一份',3677,'m'],['一条',10251,'m'],['一起',15976,'m'],['一部分',4998,'m'],['上',258101,'f'],['不亚于',185,'v'],['不仅',11895,'c'],['不仅仅',1135,'d'],['不是',46856,'c'],['不用',2829,'v'],['与',160984,'p'],['专',4975,'n'],['专业人士',3,'n'],['世界',34387,'n'],['世界各地',652,'l'],['中',243191,'f'],['为',295952,'p'],['为什么',9561,'r'],['之旅',0,'u'],['也',307851,'d'],['了',883634,'ul'],['互动',657,'d'],['产生',19495,'n'],['人',313209,'n'],['什么',59317,'r'],['今天',15960,'t'],['从',110435,'p'],['他们',93969,'r'],['代码',2049,'n'],['令人兴奋',3,'l'],['以',136106,'p'],['任何',14635,'r'],['任何人',1368,'r'],['你',234587,'r'],['促进',6674,'v'],['信息',12256,'n'],['修改',5259,'v'],['充满',4432,'a'],['充满热情',3,'n'],['公开',5094,'ad'],['共享',665,'v'],['共同',10510,'d'],['共同体',269,'n'],['关于',13762,'p'],['其中',34173,'r'],['再',55507,'d'],['准备',16199,'v'],['出席',4001,'v'],['分享',3091,'v'],['创意',481,'v'],['创新',4681,'v'],['创造',6687,'v'],['创造力',250,'n'],['利用',13559,'n'],['到',205341,'v'],['力量',10069,'n'],['加入',4855,'v'],['包容',152,'v'],['协作',726,'vn'],['参与',7060,'v'],['参与者',175,'n'],['参加',22828,'v'],['发展',68664,'vn'],['发送',585,'v'],['只是',4875,'c'],['可以',70958,'c'],['吃',36799,'v'],['各种',22183,'r'],['合作',13478,'vn'],['合作开发',3,'l'],['吗',21245,'y'],['周围',5681,'f'],['和',555815,'c'],['在',727915,'p'],['多',98900,'m'],['大',144099,'a'],['奖品',81,'n'],['好',92543,'a'],['如果',38374,'c'],['子',19089,'ng'],['学习',13482,'v'],['它',60864,'r'],['定制',324,'v'],['实际',12010,'n'],['对',184674,'p'],['寻找',3960,'v'],['导师',681,'n'],['将',122305,'d'],['就',273122,'d'],['就是',9283,'d'],['展示',2204,'v'],['希望',12597,'v'],['帮助',9128,'v'],['平台',3601,'n'],['年轻',4919,'a'],['并',93868,'c'],['建立联系',4,'n'],['开',27900,'v'],['开放',8332,'v'],['开源',70,'n'],['当然',12865,'d'],['影响',24144,'vn'],['很',69103,'zg'],['志同道合',88,'i'],['怀抱',833,'v'],['怎么',27339,'r'],['思想',15387,'n'],['思维',2227,'n'],['总有',0,'b'],['想',61904,'v'],['成为',35966,'v'],['成人',1366,'n'],['成长',5432,'v'],['我们',98740,'r'],['才华',374,'nr'],['技术',37664,'n'],['技术创新',21,'l'],['技能',1384,'n'],['投身',490,'n'],['拓宽',313,'nr'],['指导',7794,'n'],['挑战',2615,'vn'],['探索',2653,'v'],['推动',4715,'v'],['提供',16799,'v'],['提升',2510,'v'],['提高',16882,'v'],['支持',10928,'v'],['改变',10142,'v'],['教程',117,'n'],['教育资源',23,'n'],['文档',181,'n'],['方式',16797,'n'],['是',796991,'v'],['更',56478,'d'],['有关',20573,'vn'],['有益健康',3,'l'],['本质',2064,'n'],['来',161501,'v'],['来到',8779,'v'],['来自',6801,'v'],['来说',10451,'u'],['杨臻',0,'nrfg'],['松',3715,'v'],['查看',1789,'v'],['模式',3809,'n'],['欢迎',5132,'v'],['正在',5041,'t'],['每个',6618,'r'],['没有',87597,'v'],['活动',27526,'vn'],['测试',2444,'vn'],['涉及',3734,'v'],['渴望',1122,'v'],['源代码',68,'n'],['激动人心',113,'n'],['激发',1195,'v'],['热情',2818,'n'],['然而',8350,'c'],['环境',16811,'n'],['理解',5620,'v'],['甚至',15239,'d'],['用途',1375,'n'],['由',78203,'p'],['的',318825,'uj'],['目标',11527,'n'],['相信',6789,'v'],['真的',6277,'d'],['知识',8254,'v'],['研讨会',678,'n'],['社区',6115,'n'],['社群',38,'n'],['科技',15691,'n'],['积极',8844,'ad'],['等等',6063,'u'],['组成',20572,'v'],['组织',26922,'v'],['经验',9803,'n'],['经验丰富',3,'n'],['继续',14690,'v'],['编码',327,'n'],['网络',8352,'n'],['而是',10185,'c'],['联系',9767,'n'],['肯定',6227,'v'],['能够',14382,'v'],['自己',90933,'r'],['自愿',757,'d'],['致力于',3,'n'],['获取',1306,'v'],['获得',16128,'v'],['行业',8127,'n'],['行列',693,'n'],['见解',838,'v'],['视野',624,'n'],['设计',12474,'vn'],['贡献',5762,'n'],['赢得',1216,'v'],['踏上',718,'v'],['身体',7962,'n'],['软件',4601,'n'],['软件开发',3,'l'],['还',157058,'d'],['这',261791,'r'],['这个',61310,'r'],['这是',0,'r'],['适合',3795,'v'],['选择',11160,'v'],['透明',1371,'v'],['通过',35063,'p'],['邮件',436,'n'],['都',202780,'d'],['酷炫',0,'d'],['陈广宇',0,'nr'],['需要',27430,'v'],['青少年',1223,'nr'],['项目',13257,'n'],['黄瓜',201,'n'],['黄锦源',0,'nr'],['黑客',413,'nr'],];
/* require a `jieba_dict` */

function process(query) {
    // step 1: replace all punctuations with space
    var punctuations = /[,\.\/\?<>;:\'\"\\\|\[\]\{\}\(\)!@\#\$%\^\&\*~`\-_—=\+，。！？；：‘’“”【】《》〈〉、]/g
    query = query.replaceAll(punctuations, " ");
    // step 2: split with space
    query = query.split(" ");
    // step 3: split with jieba
    for (var i = 0; i < query.length; i++) {
        query[i] = jieba.cut(query[i]);
    }
    // step 4: flatten the array
    query = query.flat();
    return query;
}

async function revidx(query) {
    var rev_index = JSON.parse(await HTTP_GET2("/search/index.json"));
    var content = {};	// 记录每个文件的内容
    var file = {};		// 记录每个文件里关键词的信息，indexed by filename
    var filecnt = {};	// 计算每个文件匹配的关键词数量，indexed by filename
    var filematch = {};	// 记录每个文件匹配的关键词，indexed by filename
    query.forEach(kw => {
        if (rev_index[kw]) {
            rev_index[kw][0].forEach(doc => {
                var [filename, info] = doc;
                // 记录到file
                file[filename] = file[filename] || {};
                file[filename][kw] = info;
                // 计算到filecnt
                filecnt[filename] = filecnt[filename] || 0;
                filecnt[filename]++;
                // 记录到filematch
                filematch[filename] = filematch[filename] || [];
                filematch[filename].push(kw);
            })
        }
    })
    // 获取每个文件的内容
    for (var filename in file) {
        content[filename] = await HTTP_GET2("/search/text/" + filename);
    }
    console.log(JSON.stringify(content));
    console.log(JSON.stringify(file));
    console.log(JSON.stringify(filecnt));
    console.log(JSON.stringify(filematch));

    // 处理连续的关键词
    var multi_keywords = {};    // indexed by 连续的关键词个数
    // for each files
    for(var fname in file){
        var all_kws = [];   // each = [word, start, end, cnt], where cnt is "合并的关键词个数(merged cnt)"
        let kws = file[fname];
        // init list
        for(let k in kws){
            let [cnt, pos] = kws[k];
            pos.forEach(p => {
                all_kws.push([k, p, p + k.length, 1]);
            })
        }
        // process
        all_kws.sort((a, b) => a[1] - b[1]);    // sort by `start`, small first.
        for(var i = 0; i < all_kws.length - 1; i++){
            var a = all_kws[i], b = all_kws[i+1];
            if (b[1] - a[2] < MULTIKW_MAX_SPACE){
                // 挨在一起的两个关键词
                var merged = [`${a[0]} ${b[0]}`, a[1], b[2], a[3]+b[3]];
                all_kws.splice(i+1, 1);
                all_kws[i] = merged;
                i--;
            }
        }
        all_kws.sort((a, b) => b[3] - a[3]);    // sort by `merged cnt`, big first.
        var most = all_kws[0];
        multi_keywords[most[3]] = multi_keywords[most[3]] || [];
        var left_bound = Math.max(most[1]-50, 0);
        var right_bound = Math.min(most[2]+50, content[fname].length);
        multi_keywords[most[3]].push([fname, left_bound, right_bound, [[most[1], most[2]]]]);  // format as `result_range`
    }
    // merge `multi_keywords` into `result_range`
    var result_range = [];  // each item = [filename, pos_start, pos_end, [[hl1_s, hl1_e], [hl2_s, hl2_e]]]
    var kwcnts = Object.keys(multi_keywords).reverse();
    kwcnts.forEach(kwcnt => {   // 连续的关键词个数
        multi_keywords[kwcnt].forEach(doc => {
            result_range.push(doc);
        })
    })
    result_range.flat();    // flatten
    console.log(JSON.stringify(result_range))

    // compile to HTML
    var result_content = [];	// each item = [filename, HTML]
    result_range.forEach(r => {
        let [fname, pos_start, pos_end, hl] = r;
        hl = hl.sort((a, b) => b[0] - a[0]);	// max first
        var c = content[fname].substring(pos_start, pos_end);
        // highlight
        hl.forEach(h => {
            // console.log(1, c);
            c = c.substring(0, h[0] - pos_start) + "<b>" + c.substring(h[0] - pos_start, h[1] - pos_start) + "</b>" + c.substring(h[1] - pos_start);
            // console.log(2, c);
        })
        result_content.push([fname, c]);
    })
    return result_content;
}

async function jb(dictionary) {
    var trie = {}, // to be initialized
        FREQ = {},
        total = 0.0,
        min_freq = 0.0,
        initialized = false;

    var max_of_array = function (array) { return Math.max.apply(Math, array) },
        min_of_array = function (array) { return Math.min.apply(Math, array) };

    var gen_trie = function () {
        var lfreq = {},
            trie = {},
            ltotal = 0.0;

        for (var i = 0; i < dictionary.length; i++) {
            var entry = dictionary[i],
                word = entry[0],
                freq = entry[1];
            lfreq[word] = freq;
            ltotal += freq;
            p = trie;
            for (var ci = 0; ci < word.length; ci++) {
                var c = word[ci];
                if (!(c in p)) {
                    p[c] = {};
                }
                p = p[c];
            }
            p[''] = ''; // ending flag
        }

        return [trie, lfreq, ltotal];
    }

    var initialize = function () {
        if (initialized === true) {
            return;
        }
        if (trie) {
            trie = {};
        }
        // console.log("Building Trie...");

        var gar = gen_trie();
        trie = gar[0];
        FREQ = gar[1];
        total = gar[2];

        var min_freq = Infinity;
        // normalize:
        for (k in FREQ) {
            var v = FREQ[k];
            FREQ[k] = Math.log(v / total);
            if (FREQ[k] < min_freq) {
                min_freq = FREQ[k];
            }
        }
        initialized = true;

        // console.log("Trie built!", trie);
    }

    var get_DAG = function (sentence) {
        var N = sentence.length,
            i = 0,
            j = 0,
            p = trie,
            DAG = {};

        while (i < N) {
            var c = sentence[j];
            if (c in p) {
                p = p[c];
                if ('' in p) {
                    if (!(i in DAG)) {
                        DAG[i] = [];
                    }
                    DAG[i].push(j);
                }
                j += 1;
                if (j >= N) {
                    i += 1;
                    j = i;
                    p = trie;
                }
            }
            else {
                p = trie;
                i += 1;
                j = i;
            }
        }
        for (i = 0; i < sentence.length; i++) {
            if (!(i in DAG)) {
                DAG[i] = [i];
            }
        }
        return DAG;
    }

    var calc = function (sentence, DAG, idx, route) {
        var N = sentence.length;
        route[N] = [0.0, ''];
        for (idx = N - 1; idx > -1; idx--) {
            candidates = [];
            candidates_x = [];
            for (xi in DAG[idx]) {
                var x = DAG[idx][xi];
                var f = ((sentence.substring(idx, x + 1) in FREQ) ? FREQ[sentence.substring(idx, x + 1)] : min_freq);
                candidates.push(f + route[x + 1][0]);
                candidates_x.push(x);
            }
            var m = max_of_array(candidates);
            // console.log('max is', m);
            route[idx] = [m, candidates_x[candidates.indexOf(m)]];
        }
    }

    var __cut_DAG = function (sentence) {
        // finalseg is still to be implemented,
        // so this is also unfinished. Use __cut_DAG_NO_HMM
        // for now

        var DAG = get_DAG(sentence);
        var route = {};
        var yieldValues = [];

        calc(sentence, DAG, 0, route);

        var x = 0,
            buf = '',
            N = sentence.length;

        while (x < N) {
            var y = route[x][1] + 1,
                l_word = sentence.substring(x, y);
            if (y - x == 1) {
                buf += l_word;
            }
            else {
                if (buf.length > 0) {
                    if (buf.length == 1) {
                        yieldValues.push(buf);
                    }
                    else {
                        if (!(buf in FREQ)) {
                            var recognized = finalseg.cut(buf);
                            for (t in recognized) {
                                yieldValues.push(recognized[t]);
                            }
                        }
                        else {
                            for (elem in buf) {
                                yieldValues.push(buf[elem]);
                            }
                        }
                        buf = "";
                    }
                }
                yieldValues.push(l_word);
            }
            x = y;
        }


        if (buf.length > 0) {
            if (buf.length == 1) {
                yieldValues.push(buf);
            }
            else {
                if (!(buf in FREQ)) {
                    var recognized = finalseg.cut(buf);
                    for (t in recognized) {
                        yieldValues.push(recognized[t]);
                    }
                }
                else {
                    for (elem in buf) {
                        yieldValues.push(buf[elem]);
                    }
                }
            }
        }
        return yieldValues;
    }

    var __cut_DAG_NO_HMM = function (sentence) {
        var re_eng = /[a-zA-Z0-9]/,
            route = {},
            yieldValues = [];

        var DAG = get_DAG(sentence);
        // console.log("DAG", DAG);
        calc(sentence, DAG, 0, route);

        // console.log(route);

        var x = 0,
            buf = '',
            N = sentence.length;

        while (x < N) {
            y = route[x][1] + 1;
            l_word = sentence.substring(x, y);
            // console.log(l_word, l_word.match(re_eng))
            if (l_word.match(re_eng) && l_word.length == 1) {
                buf += l_word;
                x = y;
            }
            else {
                if (buf.length > 0) {
                    yieldValues.push(buf);
                    buf = '';
                }
                yieldValues.push(l_word);
                x = y;
            }
        }
        if (buf.length > 0) {
            yieldValues.push(buf);
            buf = '';
        }
        return yieldValues;
    }

    var cut = function (sentence) {
        var cut_all = false,
            HMM = false,
            yieldValues = [];

        var re_han = /([\u4E00-\u9FA5a-zA-Z0-9+#&\._]+)/,
            re_skip = /(\r\n|\s)/;

        var blocks = sentence.split(re_han);
        var cut_block = HMM ? __cut_DAG : __cut_DAG_NO_HMM;

        for (b in blocks) {
            var blk = blocks[b];
            // console.log(b, blk);
            if (blk.length == 0) {
                continue;
            }

            if (blk.match(re_han)) {
                var cutted = cut_block(blk);
                // console.log("matches", cutted);
                for (w in cutted) {
                    var word = cutted[w];
                    yieldValues.push(word);
                }
            }
            else {
                var tmp = blk.split(re_skip);
                for (var i = 0; i < tmp.length; i++) {
                    var x = tmp[i];
                    if (x.match(re_skip)) {
                        yieldValues.push(x);
                    }
                    else if (!cut_all) {
                        for (xi in x) {
                            yieldValues.push(x[xi]);
                        }
                    }
                    else {
                        yieldValues.push(x);
                    }
                }
            }
        }
        return yieldValues;
    }

    // initialize when the file loads (no lazy-loading yet):
    initialize();

    // window.jieba.cut = cut;
    // window.jieba.ready = true;
    // console.log("Jieba loaded.");
    // window.jieba.onload();

    jieba = {
        cut: cut
    }

    query = decodeURI(query);
    query = process(query); // split query
    var result = await revidx(query);
    // console.log(result)
    var html = [];
    result.forEach(r => {
        r[0] = r[0].substring(0, r[0].length - 9);	// cut '.html.txt'
        html.push(`
            <div class="result">
                <h2><a href="/${r[0]}">${r[0]}</a></h2>
                <p>${r[1]}</p>
            </div>
            `)
    })
    self.postMessage(html.join('<hr>'));
}


function HTTP_GET2(aUrl) {
    // Promise version.
    return new Promise(function (resolve, reject) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function () {
            if (anHttpRequest.readyState == 4) {
                if (anHttpRequest.status == 200) {
                    resolve(anHttpRequest.responseText);
                } else {
                    reject(new Error('HTTP_GET failed: ' + anHttpRequest.status));
                }
            }
        };

        anHttpRequest.open('GET', aUrl, true);
        anHttpRequest.send(null);
    });
}
function HTTP_GET2(aUrl) {
    // Promise version.
    return new Promise(function (resolve, reject) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function () {
            if (anHttpRequest.readyState == 4) {
                if (anHttpRequest.status == 200) {
                    resolve(anHttpRequest.responseText);
                } else {
                    reject(new Error('HTTP_GET failed: ' + anHttpRequest.status));
                }
            }
        };

        anHttpRequest.open('GET', aUrl, true);
        anHttpRequest.send(null);
    });
}

self.onmessage = function(e) {
    query = e.data;
    jb(jieba_dict);
}


// settings & vars

var query = "";
var jieba = {};
const MULTIKW_MAX_SPACE = 4;