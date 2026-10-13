// Concise editorial learning notes; topic tags are navigation aids, not traditional suits.
const lenormandRows=[
['骑士','Rider','消息 · 到来','消息与交流','留意新消息或新动向。可以先问：什么正在进入这件事？','不是塔罗的宫廷骑士。','骑手'],
['三叶草','Clover','小幸运 · 机会','机会与变化','把它当成短暂的小机会，思考自己能否及时回应。','不等于长期稳定的好运。','幸运草'],
['船','Ship','旅程 · 距离','机会与变化','可以联想到旅行、远方或向外探索，具体对象由问题决定。','也可能是心理或业务上的距离。','船舶'],
['房屋','House','家庭 · 安全感','生活与资源','从居住环境、家庭习惯和熟悉的基础理解。','不一定指实际买卖房产。','房子'],
['树','Tree','根基 · 缓慢生长','生活与资源','观察长期形成的状态，像树一样看根基和积累。','传统也关联健康，但不能据此判断疾病。','大树'],
['云','Clouds','模糊 · 疑惑','挑战与选择','先找出不清楚的信息，再考虑下一步。','模糊不等于一定有坏事。','云朵 乌云'],
['蛇','Snake','复杂 · 绕路','挑战与选择','提醒你留意曲折、欲望或复杂的利益关系。','不能仅凭这张牌指认第三者或坏人。','毒蛇'],
['棺材','Coffin','结束 · 停滞','挑战与选择','想想哪件事进入尾声，或已失去继续推进的活力。','不能把象征性的结束直接读成死亡。','棺木'],
['花束','Bouquet','礼物 · 欣赏','关系与人物','从礼貌、邀请、愉悦的小互动来理解。','可以只是日常善意。','鲜花'],
['镰刀','Scythe','切断 · 突然','挑战与选择','关注突然的决定、划清界限或需要割舍的部分。','附近牌与图案朝向可能影响传统读法。','镰'],
['鞭子','Whip','争论 · 重复','挑战与选择','留意反复发生的对话或摩擦：同一个问题是否又出现了？','重复也可能与训练有关，须结合情境。','鞭'],
['鸟','Birds','谈话 · 紧张','消息与交流','像来回鸣叫一样，想到讨论、电话或令人不安的交流。','别把传闻当成已经证实的事实。','鸟儿 双鸟 猫头鹰'],
['孩子','Child','新起点 · 小规模','机会与变化','可以是刚开始的事、经验不足，或问题中真正的孩子。','不直接等同怀孕。','儿童 小孩'],
['狐狸','Fox','谨慎 · 自利','挑战与选择','核对动机和细节，留意事情是否符合自身利益。','有些流派也用它表示工作，解释并不统一。','狐'],
['熊','Bear','力量 · 保护','生活与资源','可以联想到有影响力的人、保护力量或资源掌控。','保护与控制之间，需要看具体关系。','大熊'],
['星星','Stars','方向 · 希望','机会与变化','像寻找路标一样，厘清希望抵达的目标。','不能保证愿望一定实现。','星辰 star'],
['鹳','Stork','改变 · 迁移','机会与变化','观察正在调整的安排、环境或生活节奏。','改变未必是搬家，也不能据此断言怀孕。','白鹳'],
['狗','Dog','朋友 · 支持','关系与人物','从信任、陪伴与可靠的支持者来理解。','关系性质仍需由问题和邻牌判断。','犬'],
['塔','Tower','机构 · 独立','生活与资源','可以是组织、制度、边界，或与人保持距离。','与塔罗的高塔不同，不默认代表崩塌。','高塔'],
['花园','Garden','社交 · 公开','消息与交流','想到公共场所、聚会、群体或公开的平台。','强调外部社交场景，而非私密空间。','公园'],
['山','Mountain','阻碍 · 延迟','挑战与选择','确认卡点在哪里，以及是否需要绕路或等待。','延迟不代表永远不可能。','高山'],
['岔路','Crossroads','选择 · 分支','挑战与选择','列出不同方向及其代价，再理解选择的主题。','不会替你指定唯一正确的道路。','道路 十字路口 paths ways'],
['老鼠','Mice','消耗 · 流失','挑战与选择','留意一点点累积的损耗、遗漏或担忧。','可以从小问题入手，不必放大恐惧。','鼠 mouse'],
['心','Heart','喜爱 · 温情','关系与人物','想到情感、热爱或亲近的意愿。','喜欢不自动等于承诺。','爱心'],
['戒指','Ring','约定 · 连接','关系与人物','关注承诺、合作关系或持续的循环。','也可指合同，不一定是婚姻。','指环'],
['书','Book','知识 · 未知','消息与交流','从学习、研究或尚未公开的信息理解。','未知不一定是有人故意隐瞒。','书本'],
['信','Letter','文字 · 文件','消息与交流','想到消息、邮件、表格等有记录的信息。','相比鸟的来回讨论，更强调信息载体。','信件 信封'],
['男人','Man','人物 · 指示牌','关系与人物','传统人物牌，可事先约定代表询问者或相关人物。','按本人认同和阅读约定选用，不强行套性别。','绅士 gentleman 男士'],
['女人','Woman','人物 · 指示牌','关系与人物','传统人物牌，先确定它在这次阅读中代表谁。','人物关系应由情境决定，不自动等于伴侣。','淑女 lady 女士'],
['百合','Lilies','成熟 · 平和','关系与人物','可以从经验、沉静或成熟的相处方式理解。','部分传统也涉及亲密主题，流派间有差异。','百合花 lily'],
['太阳','Sun','清晰 · 活力','机会与变化','从积极的推进、信心和被看见的成果理解。','象征顺利，不是成功的保证。','日'],
['月亮','Moon','感受 · 认可','关系与人物','常涉及情绪、想象、声誉或获得认可的需要。','不要直接套用塔罗月亮的全部含义。','月'],
['钥匙','Key','关键 · 突破','机会与变化','寻找打开局面的条件，或值得重视的关键信息。','它提示重要性，不能代替事实核实。','锁匙'],
['鱼','Fish','资金 · 流动','生活与资源','可以联想到资源、交易与价值的流通。','不是投资获利的预测。','鱼群'],
['锚','Anchor','稳定 · 持续','生活与资源','观察什么让局面稳定，也看看是否因此难以移动。','稳定与被固定住，是不同角度。','船锚'],
['十字架','Cross','负担 · 责任','挑战与选择','从承担、压力、信念或难以放下的责任理解。','不是惩罚或灾祸必然发生的宣告。','十字']
];
const lenormandCards=lenormandRows.map((r,i)=>({id:i+1,name:r[0],en:r[1],keywords:r[2],topic:r[3],meaning:r[4],note:r[5],aliases:r[6]}));
function findLenormand(query='',topic='全部') {const q=query.trim().toLowerCase();const number=/^#?0*([1-9]|[12][0-9]|3[0-6])$/.exec(q);return lenormandCards.filter(c=>(topic==='全部'||c.topic===topic)&&(number?c.id===Number(number[1]):q.split(/\s+/).every(t=>[c.name,c.en,c.keywords,c.topic,c.aliases].join(' ').toLowerCase().includes(t))));}
let lenormandTopic='全部';
function renderLenormand(){const rows=findLenormand($('len-search').value,lenormandTopic);$('len-count').textContent=`找到 ${rows.length} / 36 张牌`;$('len-catalog').innerHTML=rows.length?rows.map(c=>`<details class="reference-card len-card" id="len-card-${c.id}" ${$('len-expand').checked?'open':''}><summary><span class="reference-symbol">${String(c.id).padStart(2,'0')}</span><span class="reference-title"><strong>${c.name} <span lang="en">${c.en}</span></strong><span class="len-keywords">${c.keywords}</span></span><span class="expand-mark" aria-hidden="true">＋</span></summary><div class="reference-body"><div><b>怎么理解</b><p>${c.meaning}</p></div><div><b>别急着下结论</b><p>${c.note}</p></div><p class="study-prompt">连读时，看看邻牌是在补充哪个关键词。</p></div></details>`).join(''):'<div class="empty">没有找到匹配的牌。可以搜索「27」「Letter」或「信」，也可以重置筛选。</div>';document.querySelectorAll('[data-len-topic]').forEach(b=>{const active=b.dataset.lenTopic===lenormandTopic;b.classList.toggle('selected',active);b.setAttribute('aria-pressed',String(active))});}
$('len-search').oninput=renderLenormand;
$('len-reset').onclick=()=>{lenormandTopic='全部';$('len-search').value='';renderLenormand();$('len-search').focus()};
$('len-expand').onchange=()=>document.querySelectorAll('.len-card').forEach(c=>c.open=$('len-expand').checked);
document.querySelectorAll('[data-len-topic]').forEach(b=>b.onclick=()=>{lenormandTopic=b.dataset.lenTopic;renderLenormand()});
const pairLessons=[{a:'27 · 信 Letter',b:'25 · 戒指 Ring',title:'与约定有关的文字',text:'信提供“文件 / 信息”，戒指补充“承诺 / 协作”。在工作问题中，可以练习理解为合作条款、确认邮件或合同信息。',question:'问题变成朋友聚会时，也可能只是确认约定的消息。'}, {a:'18 · 狗 Dog',b:'21 · 山 Mountain',title:'支持受到阻碍',text:'狗可以代表朋友或支持，山提供“障碍 / 距离”。可以练习读成朋友暂时帮不上忙，或联络受阻。',question:'不要跳到“朋友背叛了我”：这超出了这组关键词。'}, {a:'26 · 书 Book',b:'33 · 钥匙 Key',title:'关键在于知识或信息',text:'书的“学习 / 未知”和钥匙的“关键 / 开启”连接起来，可以联想到重要知识，或理解问题所需的信息。',question:'试着问：我还缺什么信息？用实际查证来补上。'}];
function showPair(i){document.querySelectorAll('[data-pair]').forEach(b=>{b.classList.toggle('selected',Number(b.dataset.pair)===i);b.setAttribute('aria-pressed',String(Number(b.dataset.pair)===i))});const p=pairLessons[i];$('pair-example').innerHTML=`<div class="pair-cards"><span>${p.a}</span><b>＋</b><span>${p.b}</span></div><h3>${p.title}</h3><p>${p.text}</p><p class="pair-question">${p.question}</p>`;}
document.querySelectorAll('[data-pair]').forEach(b=>b.onclick=()=>showPair(Number(b.dataset.pair)));showPair(0);
if(location.hash==='#lenormand')document.querySelector('[data-tab="lenormand"]').click();
