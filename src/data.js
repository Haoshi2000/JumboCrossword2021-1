const grid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
const rowQuestions = [
  '(ヨコ1)サルデーニャ王国の最後の王で、イタリア統一戦争を終わらせ、初代イタリア国王になった',
  '(ヨコ14)遅れること',
  '(ヨコ15)インフルエンザやマイコプラズマなどにより、喉から肺にかけて起こる炎症',
  '(ヨコ16)和歌山県の旧国名',
  '(ヨコ17)巻き寿司の周りに巻いている食べ物',
  '(ヨコ18)妨げること',
  '(ヨコ20)○○○童、奥○○○',
  '(ヨコ21)「匹」や「匿」に共通する部首',
  '(ヨコ24)多くの英雄が各地で勢力を振るい、互いに対立しあうこと',
  '(ヨコ27)「水鶏」の読みは？',
  '(ヨコ28)３月に大学生が欲しいもの',
  '(ヨコ29)インテリのこと。○○人',
  '(ヨコ30)血のつながっていない母親',
  '(ヨコ31)世界で最も大きい哺乳類',
  '(ヨコ33)「鯔」の読みは？',
  '(ヨコ35)温めないで飲むお酒',
  '(ヨコ36)英語でアクシデント',
  '(ヨコ37)多数決をするときの一般的な方法',
  '(ヨコ39)一番長い指',
  '(ヨコ41)英語ではコック',
  '(ヨコ43)運動を通じて心身の成長ねらう教科',
  '(ヨコ44)虫が蛹から成虫に変わること',
  '(ヨコ45)見た目',
  '(ヨコ47)理科○○、音楽○○、家庭科○○',
  '(ヨコ48)犯罪や暗黒街を題材とする小説。○○○○小説',
  '(ヨコ50)八郎潟のように、湾が外海から隔てられて沼になった地形',
  '(ヨコ52)寺の地図記号',
  '(ヨコ54)壊れたものを直す',
  '(ヨコ56)2014年冬季オリンピックの開催都市',
  '(ヨコ58)大学や大学院で得られる博士・修士・学士などの称号',
  '(ヨコ60)話し手と聞き手の双方から離れた人や物を指す連体詞',
  '(ヨコ61)「木綿垂」の読みは？',
  '(ヨコ62)葡萄酒を飲むための容器',
  '(ヨコ65)朝の挨拶',
  '(ヨコ66)足が３本あるカラス',
  '(ヨコ68)原子番号15の元素',
  '(ヨコ69)ネッシーという未確認生物がいたと言われる湖。○○湖',
  '(ヨコ70)おおくま座の「北斗七星」に対して、「南斗六星」が含まれる星座',
  '(ヨコ72)JR湖西線の駅で、駅名がすべてカタカナ',
  '(ヨコ73)化学で総熱量不変の法則を発見した人。○○の法則',
  '(ヨコ74)キャッチャーが持つグラブ',
  '(ヨコ75)日本の毒蛇の代表格',
  '(ヨコ77)立てかけたり吊るしたりして高い所へ上る道具',
  '(ヨコ79)カナダのオンタリオ州とアメリカのニューヨーク州の境にある滝',
  '(ヨコ82)稲荷寿司と巻き寿司の取り合わせのこと',
  '(ヨコ84)海が陸地に浸食してできた地形',
  '(ヨコ85)クロスワードの答えは二重○○の並び替え',
  '(ヨコ86)アウトの対義語',
  '(ヨコ87)表の対義語',
  '(ヨコ88)日本人初のノーベル賞受賞者',
  '(ヨコ91)マッチの木の部分',
  '(ヨコ93)自動車の免許で「AT」と略される',
];
const colQuestions = [
  '(タテ2)タイヤが１つの自転車',
  '(タテ3)転ばぬ先の○○',
  '(タテ4)逃げ出すこと',
  '(タテ5)便利な機械。「文明の○○」',
  '(タテ6)白布を菱形に畳んだ、婚礼のときの嫁の被り物',
  '(タテ7)Li→赤、Na→黄色、K→紫、など炎の中で金属特有の色が観察されること',
  '(タテ8)紡績の工程で、糸を擦り太さのむらをなくすのに用いる機械',
  '(タテ9)頭は猿、胴は狸、尾は蛇、手足は虎、声はトラツグミに似ているという伝説上の妖怪',
  '(タテ10)海沿いの地域',
  '(タテ11)社会で習うのは、地理と公民とこれ',
  '(タテ12)中部地方北東部の県。米の産地',
  '(タテ13)光の当たらない、暗い部分',
  '(タテ17)現在の千円札に描かれている人',
  '(タテ19)義歯、矯正装置などを作製、加工する専門職',
  '(タテ22)忍者が持っていた両刃の小型ナイフ',
  '(タテ23)1932年に、日本が溥儀を執政として建国した傀儡国家',
  '(タテ25)冬に空から降ってくるもの',
  '(タテ26)滝○○、○○を押さえる、笑いの○○',
  '(タテ27)同じ病気を発症した集団',
  '(タテ32)３段階に分けるときの第３位。天・地・○○',
  '(タテ34)なくて○○○○',
  '(タテ36)数の単位で10の24乗のこと。１京の１億倍。【禾へんの漢字】（し）とも',
  '(タテ37)6/22～7/22生まれの人は○○座',
  '(タテ38)アメリカの第28代大統領。ベルサイユ講和会議を開き、国際連盟創立を提唱した',
  '(タテ40)美しくすること',
  '(タテ41)H2N-(CH2)4-CH(NH2)COOHという構造式を持つ必須アミノ酸。LysやKと略される',
  '(タテ42)1874年に、板垣退助らを中心に高知県で結成された政治結社',
  '(タテ46)「二十二日に、和泉の国までと、平らかに願立つ。藤原のときざね、船路なれど、○○○○○○○す。」（土佐日記より）',
  '(タテ49)三十六歌仙の一人。伊勢物語の主人公はこの人と言われている',
  '(タテ51)He,Ne,Ar,Kr,Rnなど元素周期表で18族の元素のこと',
  '(タテ53)動物を診る人',
  '(タテ55)おでんやサラダなどに入っている食べ物',
  '(タテ57)メソポタミア文明が生まれたのは、ユーフラテス川とここの流域',
  '(タテ59)パンや酒を作るのに利用される微生物',
  '(タテ60)光の三原色は、赤と緑とこれ',
  '(タテ63)座るための家具といえばコレ',
  '(タテ64)走ること',
  '(タテ67)子供のこと',
  '(タテ69)グッピー、エンゼルフィッシュ、ディスカスなど色彩の派手なものが多い観賞用に飼育される魚',
  '(タテ71)前もってなすべき準備。○○○を整える',
  '(タテ73)髪の毛を英語で',
  '(タテ74)岐阜県北部の旧国名',
  '(タテ75)「益荒男」の読みは？',
  '(タテ76)経験が浅く、未熟な人',
  '(タテ78)収入の対義語',
  '(タテ80)自宅にある固定電話を俗にこう呼ぶことも',
  '(タテ81)沈もうとする太陽のこと',
  '(タテ83)天狗がいたという伝説で有名な京都市左京区の場所',
  '(タテ84)天照大御神が天の○○○に隠れたことで世界が暗闇に包まれた',
  '(タテ89)錯○○、同位○○、○○度',
  '(タテ90)「鱚」の読み方',
  '(タテ92)髪をすいたり、髪に挿して飾りにする道具',
];
