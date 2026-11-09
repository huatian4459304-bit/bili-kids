// v2 data generated 2026-11-09 from live Bilibili search results
// data.js — 手选视频清单 / Hand-picked video list (v2: 支持合集选集)
// ------------------------------------------------------------------
// 条目类型 / Entry types:
//  1. single     单条视频: { type, id(BV号), title, channel, category, minAge, reason, caution?, pic? }
//  2. collection B 站多P合集: { type, id(BV号), episodes: [{bvid,p,label}] }  播放用 ?bvid=..&p=N
//  3. series     多个BV组成的课程系列: { type, episodes: [{bvid,label}] }  按顺序连播学习
// 没有推荐算法：加什么，孩子看到什么。No algorithm: you curate, kids watch.
// ------------------------------------------------------------------
const VIDEOS = [
 {
  "type": "series",
  "title": "国际象棋入门 · 九讲",
  "channel": "9527ymm",
  "category": "国际象棋启蒙",
  "minAge": 5,
  "reason": "从车、象、后、王、兵、马六种棋子的走法，到将军、将杀、逼和，一套完整规则课，按顺序看完就会下棋",
  "pic": "https://i1.hdslb.com/bfs/archive/b270bcf5ea19337c142332ed71308234424be841.jpg",
  "episodes": [
   {
    "bvid": "BV16P411S7RM",
    "label": "第1讲 · 车的走法"
   },
   {
    "bvid": "BV1SP411S7dk",
    "label": "第2讲 · 象的走法"
   },
   {
    "bvid": "BV1Nh411E7ns",
    "label": "第3讲 · 后的走法"
   },
   {
    "bvid": "BV1rs4y1w72L",
    "label": "第4讲 · 王的走法"
   },
   {
    "bvid": "BV18M4y1h7wU",
    "label": "第5讲 · 兵的走法"
   },
   {
    "bvid": "BV1XM411L7r9",
    "label": "第6讲 · 马的走法"
   },
   {
    "bvid": "BV1Eo4y1b7dz",
    "label": "第7讲 · 将军"
   },
   {
    "bvid": "BV13s4y1d7cq",
    "label": "第8讲 · 将杀"
   },
   {
    "bvid": "BV1yL411e7AH",
    "label": "第9讲 · 逼和"
   }
  ]
 },
 {
  "type": "collection",
  "id": "BV165CYBPExG",
  "title": "小灯塔 · 少儿国际象棋启蒙课",
  "channel": "小野猪乔治",
  "category": "国际象棋启蒙",
  "minAge": 5,
  "reason": "12 节动画课，从认识棋盘到下完第一盘棋，节奏慢，适合第一次接触棋类的孩子",
  "episodes": [
   {
    "bvid": "BV165CYBPExG",
    "p": 1,
    "label": "第1节：认识国际象棋棋盘"
   },
   {
    "bvid": "BV165CYBPExG",
    "p": 2,
    "label": "第2节：认识国际象棋棋子"
   },
   {
    "bvid": "BV165CYBPExG",
    "p": 3,
    "label": "第3节：国际象棋兵的走法"
   },
   {
    "bvid": "BV165CYBPExG",
    "p": 4,
    "label": "第4节：国际象棋车的走法"
   },
   {
    "bvid": "BV165CYBPExG",
    "p": 5,
    "label": "第5节：国际象棋马的走法"
   },
   {
    "bvid": "BV165CYBPExG",
    "p": 6,
    "label": "第6节：国际象棋象的走法"
   },
   {
    "bvid": "BV165CYBPExG",
    "p": 7,
    "label": "第7节：国际象棋后的走法"
   },
   {
    "bvid": "BV165CYBPExG",
    "p": 8,
    "label": "第8节：国际象棋王的走法"
   },
   {
    "bvid": "BV165CYBPExG",
    "p": 9,
    "label": "第9节：国际象棋王车换位"
   },
   {
    "bvid": "BV165CYBPExG",
    "p": 10,
    "label": "第10节：国际象棋将军应将"
   },
   {
    "bvid": "BV165CYBPExG",
    "p": 11,
    "label": "第11节：国际象棋和棋规则"
   },
   {
    "bvid": "BV165CYBPExG",
    "p": 12,
    "label": "第12节：国际象棋棋谱记录"
   }
  ]
 },
 {
  "type": "collection",
  "id": "BV1YfR3YeEvY",
  "title": "【动画版】少儿国际象棋启蒙课",
  "channel": "B 站公开课",
  "category": "国际象棋启蒙",
  "minAge": 5,
  "reason": "12 节成体系的少儿启蒙课，每周固定跟一集，三个月打下基础",
  "episodes": [
   {
    "bvid": "BV1YfR3YeEvY",
    "p": 1,
    "label": "第1节：认识国际象棋棋盘"
   },
   {
    "bvid": "BV1YfR3YeEvY",
    "p": 2,
    "label": "第2节：认识国际象棋棋子"
   },
   {
    "bvid": "BV1YfR3YeEvY",
    "p": 3,
    "label": "第3节：国际象棋兵的走法"
   },
   {
    "bvid": "BV1YfR3YeEvY",
    "p": 4,
    "label": "第4节：国际象棋车的走法"
   },
   {
    "bvid": "BV1YfR3YeEvY",
    "p": 5,
    "label": "第5节：国际象棋马的走法"
   },
   {
    "bvid": "BV1YfR3YeEvY",
    "p": 6,
    "label": "第6节：国际象棋象的走法"
   },
   {
    "bvid": "BV1YfR3YeEvY",
    "p": 7,
    "label": "第7节：国际象棋后的走法"
   },
   {
    "bvid": "BV1YfR3YeEvY",
    "p": 8,
    "label": "第8节：国际象棋王的走法"
   },
   {
    "bvid": "BV1YfR3YeEvY",
    "p": 9,
    "label": "第9节：国际象棋王车换位"
   },
   {
    "bvid": "BV1YfR3YeEvY",
    "p": 10,
    "label": "第10节：国际象棋将军应将"
   },
   {
    "bvid": "BV1YfR3YeEvY",
    "p": 11,
    "label": "第11节：国际象棋和棋规则"
   },
   {
    "bvid": "BV1YfR3YeEvY",
    "p": 12,
    "label": "第12节：国际象棋棋谱记录"
   }
  ]
 },
 {
  "type": "single",
  "id": "BV1av411z7ay",
  "title": "【零基础学国际象棋】基本规则动画版",
  "channel": "forkxray",
  "category": "国际象棋启蒙",
  "minAge": 5,
  "reason": "一条视频讲完基本规则，正式上课前先看它",
  "pic": "https://i0.hdslb.com/bfs/archive/b382a97d8b806418b144011d135a05d8e6b28045.jpg"
 },
 {
  "type": "single",
  "id": "BV1bV411C71B",
  "title": "【零基础学国际象棋】基本规则英文动画版",
  "channel": "forkxray",
  "category": "国际象棋启蒙",
  "minAge": 5,
  "reason": "同一条规则的英文讲解版，学棋顺便磨耳朵",
  "caution": "英文讲解，零基础建议先看中文版",
  "pic": "https://i0.hdslb.com/bfs/archive/5748d21be60579691ad5e9e8c9875ea1103cceae.jpg"
 },
 {
  "type": "single",
  "id": "BV1XY411x7rX",
  "title": "Chess for Kids · 动画国际象棋课",
  "channel": "恭喜發財66",
  "category": "国际象棋启蒙",
  "minAge": 5,
  "reason": "纯英文儿童动画课，语速慢，画面友好",
  "caution": "英文讲解",
  "pic": "https://i1.hdslb.com/bfs/archive/43b0d08bfcf64a39fe6119c4f6454f732b9a4f8f.png"
 },
 {
  "type": "single",
  "id": "BV1WM4m1y7Dk",
  "title": "十分钟掌握意大利开局",
  "channel": "环球国象",
  "category": "国际象棋启蒙",
  "minAge": 8,
  "reason": "学完规则后的第一个'真开局'，进阶小台阶",
  "caution": "偏进阶，建议下过几十盘再看",
  "pic": "https://i2.hdslb.com/bfs/archive/757a28d550f669d26535f2f3dbe637597420e178.jpg"
 },
 {
  "type": "collection",
  "id": "BV1vJc7z4E8s",
  "title": "Super Simple Songs 慢速儿歌（必刷合集）",
  "channel": "清北精英研究所",
  "category": "英语启蒙",
  "minAge": 2,
  "reason": "SSS 是英语启蒙第一入口，语速慢、旋律洗脑；每集一首歌，可以点歌单",
  "episodes": [
   {
    "bvid": "BV1vJc7z4E8s",
    "p": 1,
    "label": "001. Five Little Monkeys"
   },
   {
    "bvid": "BV1vJc7z4E8s",
    "p": 2,
    "label": "002. Twinkle Twinkle Little Star"
   },
   {
    "bvid": "BV1vJc7z4E8s",
    "p": 3,
    "label": "003. Hickory Dickory...Crash!"
   },
   {
    "bvid": "BV1vJc7z4E8s",
    "p": 4,
    "label": "004. Row Row Row Your Boat"
   },
   {
    "bvid": "BV1vJc7z4E8s",
    "p": 5,
    "label": "005. BINGO"
   },
   {
    "bvid": "BV1vJc7z4E8s",
    "p": 6,
    "label": "006. S-A-N-T-A"
   },
   {
    "bvid": "BV1vJc7z4E8s",
    "p": 7,
    "label": "007. The Months Chant"
   },
   {
    "bvid": "BV1vJc7z4E8s",
    "p": 8,
    "label": "008. Ten In The Bed"
   },
   {
    "bvid": "BV1vJc7z4E8s",
    "p": 9,
    "label": "009. Little Snowflake"
   },
   {
    "bvid": "BV1vJc7z4E8s",
    "p": 10,
    "label": "010. Open Shut Them"
   },
   {
    "bvid": "BV1vJc7z4E8s",
    "p": 11,
    "label": "011. Jingle Bells (Learn - Sing)"
   },
   {
    "bvid": "BV1vJc7z4E8s",
    "p": 12,
    "label": "012. Head Shoulders Knees - Toes (Sing It)"
   },
   {
    "bvid": "BV1vJc7z4E8s",
    "p": 13,
    "label": "013. Head Shoulders Knees - Toes (Learn It)"
   },
   {
    "bvid": "BV1vJc7z4E8s",
    "p": 14,
    "label": "014. Sweet Dreams"
   },
   {
    "bvid": "BV1vJc7z4E8s",
    "p": 15,
    "label": "015. Old MacDonald"
   },
   {
    "bvid": "BV1vJc7z4E8s",
    "p": 16,
    "label": "016. Walking In The Jungle"
   },
   {
    "bvid": "BV1vJc7z4E8s",
    "p": 17,
    "label": "017. The Animals On The Farm"
   },
   {
    "bvid": "BV1vJc7z4E8s",
    "p": 18,
    "label": "018. Do You Like Broccoli Ice Cream？"
   },
   {
    "bvid": "BV1vJc7z4E8s",
    "p": 19,
    "label": "019. Count - Move"
   },
   {
    "bvid": "BV1vJc7z4E8s",
    "p": 20,
    "label": "020. If You,re Happy"
   },
   {
    "bvid": "BV1vJc7z4E8s",
    "p": 21,
    "label": "021. How,s The Weather？"
   },
   {
    "bvid": "BV1vJc7z4E8s",
    "p": 22,
    "label": "022. One Little Finger"
   },
   {
    "bvid": "BV1vJc7z4E8s",
    "p": 23,
    "label": "023. Counting Bananas"
   },
   {
    "bvid": "BV1vJc7z4E8s",
    "p": 24,
    "label": "024. One Potato, Two Potatoes"
   },
   {
    "bvid": "BV1vJc7z4E8s",
    "p": 25,
    "label": "025. I See Something Blue"
   },
   {
    "bvid": "BV1vJc7z4E8s",
    "p": 26,
    "label": "026. I See Something Pink"
   },
   {
    "bvid": "BV1vJc7z4E8s",
    "p": 27,
    "label": "027. Let,s Go To The Zoo"
   },
   {
    "bvid": "BV1vJc7z4E8s",
    "p": 28,
    "label": "028. The Wheels On The Bus"
   },
   {
    "bvid": "BV1vJc7z4E8s",
    "p": 29,
    "label": "029. Mary Had A Kangaroo"
   },
   {
    "bvid": "BV1vJc7z4E8s",
    "p": 30,
    "label": "030. I Have A Pet"
   }
  ]
 },
 {
  "type": "collection",
  "id": "BV1Bg411Z7yC",
  "title": "清华幼儿英语 · 语感启蒙",
  "channel": "安妈百宝箱",
  "category": "英语启蒙",
  "minAge": 2,
  "reason": "清华出品，儿歌+手指操，边唱边动，适合亲子一起看",
  "episodes": [
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 1,
    "label": "0A 1. Hello"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 2,
    "label": "0A 2. Bubble"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 3,
    "label": "0A 3. Kangaroo"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 4,
    "label": "0A 4. I Can Fly"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 5,
    "label": "0A 5. Giddy Up Horsey"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 6,
    "label": "0A 7. Lollipop"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 7,
    "label": "0A 8. Walking"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 8,
    "label": "0A 9. Three Little Ducks"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 9,
    "label": "0A 10. Zoom! Zoom! Zoom!"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 10,
    "label": "0A 11. Little Squirrel"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 11,
    "label": "0A 12.  Happy New Year"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 12,
    "label": "0B 1.  Jack-in-the-box"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 13,
    "label": "0B 2.  Handy Dandy"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 14,
    "label": "0B 3.  Dinosaur"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 15,
    "label": "0B 4.  Witch in a Jar"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 16,
    "label": "0B 5.  Egg Fun"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 17,
    "label": "0B 6.  Turtle and Snail"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 18,
    "label": "0B 8.  Johnny, Johnny"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 19,
    "label": "0B 9.  Seesaw"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 20,
    "label": "0B 10.  The Little Green Frog"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 21,
    "label": "0B 11.  Merry-go-round"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 22,
    "label": "0B 12.  Big Bad Bug"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 23,
    "label": "1A  1. Little Bee"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 24,
    "label": "1A  2. Peek-a-boo"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 25,
    "label": "1A  3. Gobble, Gobble"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 26,
    "label": "1A  4. Now Tall..."
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 27,
    "label": "1A  5. Four Little..."
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 28,
    "label": "1A  6. Cats"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 29,
    "label": "1A  7. Walking, Walking"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 30,
    "label": "1A  9. Little Mouse"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 31,
    "label": "1A  10. London Bridge..."
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 32,
    "label": "1A  11. Johnny Hammers"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 33,
    "label": "1A  12.The Chimney"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 34,
    "label": "1B 1. Good Morning Train-"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 35,
    "label": "1B 2. I’m Hungry-"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 36,
    "label": "1B 3. Big Apple Tree-"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 37,
    "label": "1B 4. Apple-"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 38,
    "label": "1B 5. We Are Marching-"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 39,
    "label": "1B 6. Here Is the Beehive-"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 40,
    "label": "1B 7. Where Is....--"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 41,
    "label": "1B 8. Round the Garden-"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 42,
    "label": "1B 9. Baby Bye-"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 43,
    "label": "1B 10. Dance Your Fingers-"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 44,
    "label": "1B 11. Clap Your Hands-"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 45,
    "label": "1B 12. Round and Round-"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 46,
    "label": "2A 1. Sitting on..."
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 47,
    "label": "2A 2. Ring Around..."
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 48,
    "label": "2A 3. Friends"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 49,
    "label": "2A 4. The Ants..."
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 50,
    "label": "2A 6. Five Little Sausages"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 51,
    "label": "2A 7. One, Two..."
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 52,
    "label": "2A 8. Eentsy ..."
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 53,
    "label": "2A 9. Eentsy..."
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 54,
    "label": "2A 10. Five Rabbits"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 55,
    "label": "2A 11. Three Little..."
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 56,
    "label": "2A 12. Twinkle..."
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 57,
    "label": "2B 1. I Love to Go to School"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 58,
    "label": "2B 2. Lazy Mary"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 59,
    "label": "2B 3. Row, Row, Row Your boat"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 60,
    "label": "2B 4. I’m a Little Teapot"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 61,
    "label": "2B 5. This Little Pig"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 62,
    "label": "2B 6. Hickory Dickory Dock"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 63,
    "label": "2B 7. Ali Baba’s Farm"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 64,
    "label": "2B 8. How Much Is That Doggy ..."
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 65,
    "label": "2B 9. I Can Hear"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 66,
    "label": "2B 10. There Is Thunder"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 67,
    "label": "2B 11. Rain, Rain Go Away"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 68,
    "label": "2B 12. You Are My Sunshine"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 69,
    "label": "3A 1. Three Blue Pigeons"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 70,
    "label": "3A 2. Pull the Rope"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 71,
    "label": "3A 3. Plants"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 72,
    "label": "3A 4. Jack, Be Nimble"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 73,
    "label": "3A 5. The Mulberry Bush"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 74,
    "label": "3A 6. What Do You Want to Be-"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 75,
    "label": "3A 7. Looby Loo"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 76,
    "label": "3A 8. Pussycat"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 77,
    "label": "3A 9. The Bear Went Over the Mountain"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 78,
    "label": "3A 10. What Do Monsters Do-"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 79,
    "label": "3A 11. If You’re Happy"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 80,
    "label": "3A 12. We Wish You a Merry Christmas"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 81,
    "label": "3B 1. Who stole the Cookies..."
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 82,
    "label": "3B 2. Charlie Over the Ocean"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 83,
    "label": "3B 3. Candy Shop"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 84,
    "label": "3B 4. The Gingerboy"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 85,
    "label": "3B 5. The Wheels on the Bus"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 86,
    "label": "3B 6. Little Peter Rabbit"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 87,
    "label": "3B 7. Over in the Meadow"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 88,
    "label": "3B 8. Traffic Rules"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 89,
    "label": "3B 9. Jack-O-Lanterns"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 90,
    "label": "3B 10. I See the Wind"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 91,
    "label": "3B 11. Three Brown Bears"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 92,
    "label": "4A 1. S-M-I-L-E"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 93,
    "label": "4A 2. Baby Bumblebee"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 94,
    "label": "4A 3. I Had a Loose Tooth"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 95,
    "label": "4A 4. In a Cabin in a Wood"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 96,
    "label": "4A 5. She’ll Be Coming Around the..."
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 97,
    "label": "4A 6. I Went Upstairs"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 98,
    "label": "4A 7. The Big Drum"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 99,
    "label": "4A 8. Raindrop Song"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 100,
    "label": "4A 9. Eggs"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 101,
    "label": "4A 10. The Green Grass Grows All Around"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 102,
    "label": "4A 11. A Chubby Little Snowman"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 103,
    "label": "4A 12. I Am Special"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 104,
    "label": "4B 1. All Together Now"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 105,
    "label": "4B 2. Fiddle-De-Dee"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 106,
    "label": "4B 3. The Life of a Butterfly"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 107,
    "label": "4B 4. If the Moon Was A Cookie"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 108,
    "label": "4B 5. There Was an Old Lady Who ..."
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 109,
    "label": "4B 6. Cover Your Mouth"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 110,
    "label": "4B 7. April Fool"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 111,
    "label": "4B 8. Today Is Sunday"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 112,
    "label": "4B 9. The Chicken Dance"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 113,
    "label": "4B 10. I Love Trash"
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 114,
    "label": "4B 11. I Wish I Were a Little ..."
   },
   {
    "bvid": "BV1Bg411Z7yC",
    "p": 115,
    "label": "4B 12.Skidamarink"
   }
  ]
 },
 {
  "type": "collection",
  "id": "BV18W4y1j7cE",
  "title": "Super JoJo 英文版（带字幕）",
  "channel": "功成月满",
  "category": "英语启蒙",
  "minAge": 2,
  "reason": "幼儿生活场景英语，句子短、重复多，低龄友好",
  "episodes": [
   {
    "bvid": "BV18W4y1j7cE",
    "p": 1,
    "label": "001. This Is the Way"
   },
   {
    "bvid": "BV18W4y1j7cE",
    "p": 2,
    "label": "002. Good Night Song"
   },
   {
    "bvid": "BV18W4y1j7cE",
    "p": 3,
    "label": "003. Peek A Boo Song"
   },
   {
    "bvid": "BV18W4y1j7cE",
    "p": 4,
    "label": "004. London Bridge is Falling Down"
   },
   {
    "bvid": "BV18W4y1j7cE",
    "p": 5,
    "label": "005. Bath Song"
   },
   {
    "bvid": "BV18W4y1j7cE",
    "p": 6,
    "label": "006. Ice Cream Song"
   },
   {
    "bvid": "BV18W4y1j7cE",
    "p": 7,
    "label": "007. Yes Yes Wake Up Song"
   },
   {
    "bvid": "BV18W4y1j7cE",
    "p": 8,
    "label": "008. Breakfast Song"
   },
   {
    "bvid": "BV18W4y1j7cE",
    "p": 9,
    "label": "009. Sick Song"
   },
   {
    "bvid": "BV18W4y1j7cE",
    "p": 10,
    "label": "010. The Boo Boo Song"
   },
   {
    "bvid": "BV18W4y1j7cE",
    "p": 11,
    "label": "011. Johny Johny Yes Papa"
   },
   {
    "bvid": "BV18W4y1j7cE",
    "p": 12,
    "label": "012. Please and Thank You Song"
   },
   {
    "bvid": "BV18W4y1j7cE",
    "p": 13,
    "label": "013. Baby Care Song"
   },
   {
    "bvid": "BV18W4y1j7cE",
    "p": 14,
    "label": "014. Doctor Checkup Song"
   },
   {
    "bvid": "BV18W4y1j7cE",
    "p": 15,
    "label": "015. No No Table Manners Song"
   },
   {
    "bvid": "BV18W4y1j7cE",
    "p": 16,
    "label": "016. Car Wash Song"
   },
   {
    "bvid": "BV18W4y1j7cE",
    "p": 17,
    "label": "017. Baby Shark"
   },
   {
    "bvid": "BV18W4y1j7cE",
    "p": 18,
    "label": "018. Yes Yes Vegetables Song"
   },
   {
    "bvid": "BV18W4y1j7cE",
    "p": 19,
    "label": "019. Baby Doctor Check Up Song"
   },
   {
    "bvid": "BV18W4y1j7cE",
    "p": 20,
    "label": "020. The Colors Song"
   },
   {
    "bvid": "BV18W4y1j7cE",
    "p": 21,
    "label": "021. Big and Small Song"
   },
   {
    "bvid": "BV18W4y1j7cE",
    "p": 22,
    "label": "022. Bingo"
   },
   {
    "bvid": "BV18W4y1j7cE",
    "p": 23,
    "label": "023. Wheels on the Bus"
   },
   {
    "bvid": "BV18W4y1j7cE",
    "p": 24,
    "label": "024. Mommy Got Sick"
   },
   {
    "bvid": "BV18W4y1j7cE",
    "p": 25,
    "label": "025. Clean Up Trash Song"
   },
   {
    "bvid": "BV18W4y1j7cE",
    "p": 26,
    "label": "026. Happy Halloween Song"
   },
   {
    "bvid": "BV18W4y1j7cE",
    "p": 27,
    "label": "027. I Don't Like The Seat Belt"
   },
   {
    "bvid": "BV18W4y1j7cE",
    "p": 28,
    "label": "028. Clean Up Song"
   },
   {
    "bvid": "BV18W4y1j7cE",
    "p": 29,
    "label": "029. Itsy Bitsy Spider"
   },
   {
    "bvid": "BV18W4y1j7cE",
    "p": 30,
    "label": "030. Happy Birthday Song"
   },
   {
    "bvid": "BV18W4y1j7cE",
    "p": 31,
    "label": "032. Rain Rain Go Away"
   },
   {
    "bvid": "BV18W4y1j7cE",
    "p": 32,
    "label": "039. Farm Animals Song"
   },
   {
    "bvid": "BV18W4y1j7cE",
    "p": 33,
    "label": "045.Five Little Monkeys Jumping on the Bed"
   }
  ]
 },
 {
  "type": "collection",
  "id": "BV1sG411x7HH",
  "title": "《猜猜我有多爱你》降速版（带字幕）",
  "channel": "Bingokids外教俱乐部",
  "category": "英语启蒙",
  "minAge": 3,
  "reason": "经典绘本改编动画，降速+字幕，睡前故事级语速",
  "episodes": [
   {
    "bvid": "BV1sG411x7HH",
    "p": 1,
    "label": "001 Little Green Worm 小青虫"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 2,
    "label": "002 Make A Rainbow 做个彩虹"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 3,
    "label": "003 The Favorite Tree 最喜欢的树"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 4,
    "label": "004 Spider's Web 蜘蛛网"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 5,
    "label": "005 Big Foot 大脚丫"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 6,
    "label": "006 Too Big，Too Small 太大，太小"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 7,
    "label": "007 Winter Moon 冬月"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 8,
    "label": "008 Up All Night 通宵"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 9,
    "label": "009 The Collection 小收藏"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 10,
    "label": "010 The Lucky Egg 幸运蛋"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 11,
    "label": "011 The Autumn Journey 秋日之旅"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 12,
    "label": "012 The Song Of Spring 春日之歌"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 13,
    "label": "013 Summer Strawberries 夏日草莓"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 14,
    "label": "014 The Sliperry Slide 滑梯"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 15,
    "label": "015 Echo Game 回声游戏"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 16,
    "label": "016 Cloudy Meadow 阴天的草地"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 17,
    "label": "017 Autumn Play 秋天爱玩耍"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 18,
    "label": "018 Now You See Me 现在你可以看到我了"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 19,
    "label": "019 Busy As A Bee 像蜜蜂一样忙碌"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 20,
    "label": "020 Birthday Suprise 生日惊喜"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 21,
    "label": "021 Win Or Lose 是输还是赢"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 22,
    "label": "022 Summer Days 夏日河边"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 23,
    "label": "023 The Holy Branch 冬青礼物"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 24,
    "label": "024 Topsy-Flopsy Day 兔兔颠倒日"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 25,
    "label": "025 Feast Day 宴会节"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 26,
    "label": "026 Where Are My Acorns？ 我的橡子哪去了？"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 27,
    "label": "027 Opening Song"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 28,
    "label": "028 SC Fields of Flowers"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 29,
    "label": "029 Field of Flowers"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 30,
    "label": "030 The Nest"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 31,
    "label": "031 The Scents Of Spring"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 32,
    "label": "032 Can You Touch The Stars"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 33,
    "label": "033 Treasure Hunt"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 34,
    "label": "034 SC Scents of Spring"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 35,
    "label": "035 SC Plum Summer"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 36,
    "label": "036 SC Pumpkin Patch"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 37,
    "label": "037 SC New Friend"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 38,
    "label": "038 SC Moon Dance"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 39,
    "label": "039 SC Where's Little Redwood Fox"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 40,
    "label": "040 SC Taste of Sunset"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 41,
    "label": "041 奇妙的复活节"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 42,
    "label": "042 月光下的平安夜"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 43,
    "label": "043 Compilation Glggling Fun"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 44,
    "label": "044 CompilationFun With Little Field Mouse"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 45,
    "label": "045 Compilation Little Grey Squirrel"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 46,
    "label": "046  Compilation Little Redwood Fox Games"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 47,
    "label": "047 Compilation Little White Owl's Stories"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 48,
    "label": "048 Compilation Moments with Friends"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 49,
    "label": "049 Compilation Otters Antics"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 50,
    "label": "050 cooling rain"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 51,
    "label": "051 CREATINGANEWWEB"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 52,
    "label": "052 DUCKRACE!"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 53,
    "label": "053 FAVOURITETHING!"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 54,
    "label": "054 Favouritethinginthemeadow"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 55,
    "label": "055 FIELDSOFFLOWERS!"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 56,
    "label": "056 FINDERSKEEPERS!"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 57,
    "label": "057 FLYLIKEABIRD"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 58,
    "label": "058 TAKING SHELTER"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 59,
    "label": "059 FOLLOWTHATSTICK!"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 60,
    "label": "060 WHO STOLE MY BERRIES 谁偷了我的浆果"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 61,
    "label": "061 FOLLOWTHECLUES"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 62,
    "label": "062 Foreverandaday"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 63,
    "label": "063 FULLEPISODEIt'sOkay"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 64,
    "label": "064 FunintheGreatOutdoors!"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 65,
    "label": "065 FUNINTHESNOW"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 66,
    "label": "066 FUNWITHBIGNUTBROWNHARE"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 67,
    "label": "067 FunwithLittleFieldMouseBigForaDay"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 68,
    "label": "068 FunWithLittleNutbrownHareMaketheMo"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 69,
    "label": "069 FunwithLittleNutbrownHareLeafShade"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 70,
    "label": "070 FunWithLittleNutbrownHareSnowFriends"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 71,
    "label": "071 FunwithLittleNutbrownHareStickRace"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 72,
    "label": "072 GAMESINTHEFOG"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 73,
    "label": "073 GHMILYCompilationGAMES"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 74,
    "label": "074 GHMILYCompilationNATURE"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 75,
    "label": "075 GatheringAFlowerRainbow"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 76,
    "label": "076 GHMILYCompilationRAINYDAYSANDSNOWFUN"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 77,
    "label": "077 GHMILYCompilationSUMMERFUNANDYUMMYFOOD"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 78,
    "label": "079 GHMILYLookingforBlue"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 79,
    "label": "080 GHMILYlookingforyellow"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 80,
    "label": "081 GROWINGBIGGERALLTHETIME"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 81,
    "label": "082 FULLEPISODECloudyMeadow"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 82,
    "label": "083 FULLEPISODENowYouSeeMe"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 83,
    "label": "084 FULLEPISODETheHollyBranch"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 84,
    "label": "085 PLAYINGINTHEAUTUMNLEAVES"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 85,
    "label": "086 ShortCut'FlytheNest'"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 86,
    "label": "087 GuessHowMuchILoveYouABIGHELP"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 87,
    "label": "088 ABRANDNEWCREATURE"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 88,
    "label": "089 GuessHowMuchILoveYouAFLOWERYFIELD"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 89,
    "label": "090 GuessHowMuchILoveYouAFUNNYLITTLECHICK"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 90,
    "label": "091 GuessHowMuchILoveYouAGAMEFOREVERYONE"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 91,
    "label": "092 GuessHowMuchILoveYouAGREATDISGUISE"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 92,
    "label": "094 GuessHowMuchILoveYouANEWGAME"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 93,
    "label": "095 GuessHowMuchILoveYouANEWPET"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 94,
    "label": "093 GuessHowMuchILoveYouAGREATNEWGAME"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 95,
    "label": "096 GuessHowMuchILoveYouAPROMISETOPLAY"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 96,
    "label": "097 ASNOWFLAKEFORBIGNUTBROWNHARE"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 97,
    "label": "098 GuessHowMuchILoveYouASPECIALGIFT"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 98,
    "label": "099 GuessHowMuchILoveYouASPECIALTAIL"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 99,
    "label": "100 GuessHowMuchILoveYouASPECIALTHING"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 100,
    "label": "102 ASTORYFORLITTLEWHITEOWL"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 101,
    "label": "103 GuessHowMuchILoveYouAVERYSPECIALTAIL!"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 102,
    "label": "104 GuessHowMuchILoveYouAWAYTODISAPPEAR"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 103,
    "label": "105 GuessHowMuchILoveYouACORNGAMES"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 104,
    "label": "106 AdventuresintheMeadowHare'sEyeView"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 105,
    "label": "107 AdventuresintheMeadowMakingupaStory"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 106,
    "label": "108 AdventuresintheMeadowSnowBlanket"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 107,
    "label": "109 AdventuresintheMeadowSpecialSmell"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 108,
    "label": "110 AdventuresintheMeadowWhereDoestheRi..."
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 109,
    "label": "111 AdventuresintheMeadow'HideandSeek'"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 110,
    "label": "112 AdventureswithLittleNutbrownHare"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 111,
    "label": "113 ALLTHECOLOURSOFTHERAINBOW"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 112,
    "label": "114 AnEnchantingEaster'Trailer2019"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 113,
    "label": "115 Asmuchasbigsnowhareloveslittlesnow"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 114,
    "label": "116 HappyFather'sDay!"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 115,
    "label": "117 HappyMother'sDay!"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 116,
    "label": "118 HappyValentine'sDay"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 117,
    "label": "119 HARESDON'THIBERNATE"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 118,
    "label": "120 Hidingfromtherain"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 119,
    "label": "121 IPROMISE"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 120,
    "label": "122 INSEARCHOFACREATURE"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 121,
    "label": "123 KEEPINGWARM"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 122,
    "label": "124 LEARNINGTOSKATE"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 123,
    "label": "125 LET'STRADEPLACES"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 124,
    "label": "126 LITTLEQUACK"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 125,
    "label": "127 MAKEANEST!"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 126,
    "label": "128 MAKETHEMOSTOFTHEDAY!"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 127,
    "label": "129 MAKINGFRIENDSINTHESNOW"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 128,
    "label": "130 Moments to Share All the Stars in the Sky!"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 129,
    "label": "131 MOMENTSOFFRIENDSHIP"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 130,
    "label": "132 MomentstoShareAsMuchAsOurHome"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 131,
    "label": "133 MomentstoShareLendaHelpingHand"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 132,
    "label": "134 MomentstoShare-There'sNoPlaceLikeHome"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 133,
    "label": "135 MomentstoShare-UnexpectedTreasures!"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 134,
    "label": "136 More than all the treasure"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 135,
    "label": "137 Morethanallthespotsonladybugs"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 136,
    "label": "138 NEVERGIVEUP!"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 137,
    "label": "139 NEVERGIVEUP"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 138,
    "label": "140 PINECONETREE"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 139,
    "label": "141 ShortCutCanyoutouchthestars"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 140,
    "label": "142 ShortCutLeafShade"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 141,
    "label": "143 ShortCutBlossoms"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 142,
    "label": "144 ShortCutFavouriteThing"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 143,
    "label": "145 ShortCutFieldsofFlowers"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 144,
    "label": "146 ShortCutFollowMe"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 145,
    "label": "147 ShortCutIt'sOkay"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 146,
    "label": "148 ShortCutLaughterinthemeadow!"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 147,
    "label": "149 ShortCutLittleFieldMouseDancing"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 148,
    "label": "150 ShortCutMoonDance"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 149,
    "label": "151 ShortCutNewFriend"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 150,
    "label": "152 ShortCutNoPlaceLikeHome"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 151,
    "label": "153 ShortCutPlumSummer"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 152,
    "label": "154 ShortCutPumpkinPatch"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 153,
    "label": "155 ShortCutRainyDays"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 154,
    "label": "156 ShortCutScentsofSpring"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 155,
    "label": "158 ShortCutTreasureHunt"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 156,
    "label": "159 ShortCutWhere'sLittleRedwoodFox"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 157,
    "label": "160 ShortCutWindWhistle"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 158,
    "label": "161 SnippetAutumnLeaves"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 159,
    "label": "162 SnippetBlossomTree"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 160,
    "label": "163 SnippetCarrots"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 161,
    "label": "164 SnippetChange"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 162,
    "label": "165 SnippetFieldofFlowers"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 163,
    "label": "166 SnippetHideandBoo"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 164,
    "label": "167 SnippetIWishICouldFly"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 165,
    "label": "167 SnippetIWishICouldFly"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 166,
    "label": "168 SnippetKeepingCool"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 167,
    "label": "169 Snippet-MarchLikeAnAnt"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 168,
    "label": "170 SnippetNewFriends"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 169,
    "label": "171 SnippetTheNoisesoftheNight"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 170,
    "label": "172 SnippetWhistling"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 171,
    "label": "173 SnippetYou'reit!"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 172,
    "label": "174 SNOWDANCING!"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 173,
    "label": "175 SNOWSEEK"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 174,
    "label": "176 SNOWSLIDE"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 175,
    "label": "177 SNOWYFRIENDS"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 176,
    "label": "178 SOMETHINGSPECIAL"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 177,
    "label": "179 SPARKLYROCK"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 178,
    "label": "180 SPECIALFEATHER"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 179,
    "label": "181 STARBRIGHT"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 180,
    "label": "182 STRAWBERRIESFORLITTLEFIELDMOUSE"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 181,
    "label": "183 SWISHSWISHWOOT"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 182,
    "label": "184 CHRISTMAS IN JULY TRAILER 7月圣诞节预告片"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 183,
    "label": "185 TRAILER TV Series 预告片电视连续剧"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 184,
    "label": "186 Baby Blue Birds 蓝色的小鸟"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 185,
    "label": "187 All Winter Long 整个冬天+As much as I can whistle 能吹多少就吹多少+Autumn Warmth 秋天的温暖"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 186,
    "label": "188 Bedtime Story 睡前故事"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 187,
    "label": "189 BIG AND BRAVE 大而勇敢"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 188,
    "label": "190 BIG SURPRISE! 大惊喜!"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 189,
    "label": "191 BREAKFAST INVITATION 早餐的邀请"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 190,
    "label": "192 Celebrate Father's Day 庆祝父亲节"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 191,
    "label": "193 CHASING FRIENDS 追逐的朋友"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 192,
    "label": "194 CHASING THE SCENT 追逐的气味"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 193,
    "label": "195 COLLECTING AMAZING THINGS 收集令人惊奇的事情"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 194,
    "label": "196 COLLECTING BLUE THINGS 收集蓝色的东西"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 195,
    "label": "197 THE FIRST FULL MOON OF WINTER 冬天的第一个满月-"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 196,
    "label": "198 THE GREATEST TREASURE 最伟大的宝藏"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 197,
    "label": "199 THE MISSING ACORNS 失踪的橡子"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 198,
    "label": "200 THE NORTHERN LIGHTS 北极光"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 199,
    "label": "201 THE PLUM TREE 梅花树"
   },
   {
    "bvid": "BV1sG411x7HH",
    "p": 200,
    "label": "202 THE SECRET GIVER 给予者的秘密"
   }
  ]
 },
 {
  "type": "collection",
  "id": "BV1Hh411q7tX",
  "title": "100 本经典绘本动画",
  "channel": "开心妈侃娃",
  "category": "英语启蒙",
  "minAge": 3,
  "reason": "100 本绘本一书一集，可以照着书单挑，配合纸质绘本共读",
  "episodes": [
   {
    "bvid": "BV1Hh411q7tX",
    "p": 1,
    "label": "(Animated Story) The Very Hungry Caterpillar"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 2,
    "label": "A Duck goes Potty"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 3,
    "label": "Brown Bear, Brown Bear"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 4,
    "label": "My Dad by Anthony Browne"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 5,
    "label": "No, David!"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 6,
    "label": "Pengiun Says Please"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 7,
    "label": "Ten Tiny Toes"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 8,
    "label": "S01 Good Night, Gorilla"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 9,
    "label": "S02 The Napping House"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 10,
    "label": "S03 Happy Birthday, Moon"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 11,
    "label": "S04 The Rainbabies"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 12,
    "label": "S05 Zin! Zin! Zin! A Violin"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 13,
    "label": "S06 Elizabeti's doll"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 14,
    "label": "S07 Corduroy"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 15,
    "label": "S08 The Happy Lion"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 16,
    "label": "S09 Mike Mulligan and His Steam Shovel"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 17,
    "label": "S10 I Love You Like Crazy Cakes"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 18,
    "label": "S11 Smile for Auntie"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 19,
    "label": "S12 The Happy Owls"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 20,
    "label": "S13 Goose"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 21,
    "label": "S14 There Was an Old Lady Who Swallowed a Fly"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 22,
    "label": "S15 Frog Went A-Courtin"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 23,
    "label": "S16 This Land is Your Land"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 24,
    "label": "S17 Over in the Meadow"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 25,
    "label": "S18 Giraffes Can t Dance"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 26,
    "label": "S19 The Chinese Violin"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 27,
    "label": "S20 Dem Bones"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 28,
    "label": "S21 Changes, Changes"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 29,
    "label": "S22 The Wheels on the Bus"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 30,
    "label": "S23 Joseph Had a Little Overcoat"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 31,
    "label": "S24 Musical Max"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 32,
    "label": "S25 Bugs! Bugs! Bugs!"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 33,
    "label": "S26 All the Colors of the Earth"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 34,
    "label": "S27 Keeping House"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 35,
    "label": "S28 Hush Little Baby"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 36,
    "label": "S29 Giggle, Giggle, Quack"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 37,
    "label": "S30 Duck for President"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 38,
    "label": "S31 Dooby Dooby Moo"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 39,
    "label": "S32 Diary of a Worm"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 40,
    "label": "S33 Diary of a Fly"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 41,
    "label": "S34 Is your mama a llama"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 42,
    "label": "S35 Each Peach Pear Plum"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 43,
    "label": "S36 Noisy Nora"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 44,
    "label": "S37 The Little Red Hen"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 45,
    "label": "S38 Reading to Your Bunny"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 46,
    "label": "S39 Red Riding Hood"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 47,
    "label": "S40 The Three Little Pigs"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 48,
    "label": "S41 Cinderella"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 49,
    "label": "S42 Hansel and Gretel"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 50,
    "label": "S43 Gildilocks and the Three Bears"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 51,
    "label": "S44 Space Case"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 52,
    "label": "S45 The Ugly Duckling"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 53,
    "label": "S47 The Emperor's New Clothes"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 54,
    "label": "S48 The Red Shoes"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 55,
    "label": "S49 The Little Match Girl"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 56,
    "label": "S50 The Swineherd"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 57,
    "label": "S51 He's Got the Whole World in His Hands"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 58,
    "label": "S52 Come On, Rain"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 59,
    "label": "S53 Giving Thanks-Anative American Good Morning Message"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 60,
    "label": "S54 Owl Moon"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 61,
    "label": "S55 The Tale of the Mandarin Ducks"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 62,
    "label": "S56 Patrick"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 63,
    "label": "S57 A Boy, a Dog and a Frog"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 64,
    "label": "S58 Antarctic Antics"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 65,
    "label": "S59 In the Small, Small Pond"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 66,
    "label": "S60 Bear Snores On"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 67,
    "label": "S61 Bark, George"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 68,
    "label": "S62 Caps for Sale"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 69,
    "label": "S63 The Hat"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 70,
    "label": "S64 The Little Red Lighthouse and the Great Gray Bridge"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 71,
    "label": "S65 The Teacher from the Black Lagoon"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 72,
    "label": "S66 The Librarian from the Black Lagoon"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 73,
    "label": "S67 The Gym Teacher from the Black Lagoon"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 74,
    "label": "S68 Shrinking Violin"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 75,
    "label": "S69 Miss Nelson Has a Field Day"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 76,
    "label": "S70 Miss Nelson is Back"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 77,
    "label": "S71 The Day Jimmy s Boa Ate the Wash"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 78,
    "label": "S72 The Dot"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 79,
    "label": "S73 Amazing Grace"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 80,
    "label": "S74_Crazy_Hair_Day"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 81,
    "label": "S75_How_do_Dinosaurs_Go_to_School"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 82,
    "label": "S76_Petunia"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 83,
    "label": "S77_Monty"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 84,
    "label": "S78_Will_I_have_a_Friend"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 85,
    "label": "S79_So_You_Want_t_o_be__President"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 86,
    "label": "S80_My_Senator_and_Me-A_Dog__s-Eye_View_of_Washington_D.C."
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 87,
    "label": "S81_Madam_President"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 88,
    "label": "S82_I_Could_Do_that-Esther_Morris_Gets_Women_the_Vote"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 89,
    "label": "S83_The_Night_Before_Christmas"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 90,
    "label": "S84_Seven_Candies_for_Kwanzaa"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 91,
    "label": "S86_Too_Many_Tamales"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 92,
    "label": "S87_Max__s_Christmas"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 93,
    "label": "S88_Morris__s_Disappearing_Bag"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 94,
    "label": "S89_The_Little_Drummer_Boy"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 95,
    "label": "S90_A_Very_Brave_Witch"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 96,
    "label": "S91_A_Dark,_Dark_Tale"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 97,
    "label": "S92_By_the_Light_of_the_Halloween_Moon"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 98,
    "label": "S93_Georgie"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 99,
    "label": "S94_The_Witch_in_the_Cherry_Tree"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 100,
    "label": "S95_The_Three_Robbers"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 101,
    "label": "S96_The_Three_Long-Legged_Cat"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 102,
    "label": "S97_Little_Tim_and_the_Brave_Sea_Captain"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 103,
    "label": "S98_Ralph_S._Mouse"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 104,
    "label": "S99_Stanley_and_the_Dinosaurs"
   },
   {
    "bvid": "BV1Hh411q7tX",
    "p": 105,
    "label": "S100_Uncle_Elephant"
   }
  ]
 },
 {
  "type": "collection",
  "id": "BV1D14y1J7kQ",
  "title": "动物王国大冒险",
  "channel": "燕儿老师吖",
  "category": "英语启蒙",
  "minAge": 3,
  "reason": "英文动画+动物主题，一条视频同时喂两个兴趣点",
  "episodes": [
   {
    "bvid": "BV1D14y1J7kQ",
    "p": 1,
    "label": "02 wakeup动画"
   },
   {
    "bvid": "BV1D14y1J7kQ",
    "p": 2,
    "label": "06 seek 动画"
   },
   {
    "bvid": "BV1D14y1J7kQ",
    "p": 3,
    "label": "10 mybanana动画"
   },
   {
    "bvid": "BV1D14y1J7kQ",
    "p": 4,
    "label": "12 goingack"
   },
   {
    "bvid": "BV1D14y1J7kQ",
    "p": 5,
    "label": "14 ready set go"
   },
   {
    "bvid": "BV1D14y1J7kQ",
    "p": 6,
    "label": "16 say cheese动画"
   },
   {
    "bvid": "BV1D14y1J7kQ",
    "p": 7,
    "label": "18 look动画"
   },
   {
    "bvid": "BV1D14y1J7kQ",
    "p": 8,
    "label": "22 sleeping bear"
   },
   {
    "bvid": "BV1D14y1J7kQ",
    "p": 9,
    "label": "27 jusy bee 动画"
   },
   {
    "bvid": "BV1D14y1J7kQ",
    "p": 10,
    "label": "31 camping night 动画"
   },
   {
    "bvid": "BV1D14y1J7kQ",
    "p": 11,
    "label": "33 flat 动画"
   },
   {
    "bvid": "BV1D14y1J7kQ",
    "p": 12,
    "label": "37 landing 动画"
   },
   {
    "bvid": "BV1D14y1J7kQ",
    "p": 13,
    "label": "39 shellgame 动画"
   },
   {
    "bvid": "BV1D14y1J7kQ",
    "p": 14,
    "label": "43 the dark night动画"
   },
   {
    "bvid": "BV1D14y1J7kQ",
    "p": 15,
    "label": "45 blbble frends动画"
   },
   {
    "bvid": "BV1D14y1J7kQ",
    "p": 16,
    "label": "47 pack it up动画"
   }
  ]
 },
 {
  "type": "collection",
  "id": "BV1xBKTzwEU6",
  "title": "萌鸡小队 中英双语",
  "channel": "清北学长李狗蛋",
  "category": "英语启蒙",
  "minAge": 3,
  "reason": "孩子熟悉的角色说英文，接受度高",
  "caution": "标题写 600 集，实际合集内为 35 集",
  "episodes": [
   {
    "bvid": "BV1xBKTzwEU6",
    "p": 1,
    "label": "第02集 滚动吧蜣螂"
   },
   {
    "bvid": "BV1xBKTzwEU6",
    "p": 2,
    "label": "第04集 是毛毛虫还是豆子"
   },
   {
    "bvid": "BV1xBKTzwEU6",
    "p": 3,
    "label": "第06集 虫虫会放屁"
   },
   {
    "bvid": "BV1xBKTzwEU6",
    "p": 4,
    "label": "第07集 捉迷藏竹节虫最厉害了"
   },
   {
    "bvid": "BV1xBKTzwEU6",
    "p": 5,
    "label": "第11集 快停下小野猪"
   },
   {
    "bvid": "BV1xBKTzwEU6",
    "p": 6,
    "label": "第12集 麦奇当哥哥啦"
   },
   {
    "bvid": "BV1xBKTzwEU6",
    "p": 7,
    "label": "第13集 跟蚯蚓在雨中玩"
   },
   {
    "bvid": "BV1xBKTzwEU6",
    "p": 8,
    "label": "第15集 新朋友秧鸡"
   },
   {
    "bvid": "BV1xBKTzwEU6",
    "p": 9,
    "label": "第21集 哎呀谁的包包掉了"
   },
   {
    "bvid": "BV1xBKTzwEU6",
    "p": 10,
    "label": "第24集 鼹鼠的听力好厉害"
   },
   {
    "bvid": "BV1xBKTzwEU6",
    "p": 11,
    "label": "第25集 爱打嗝的吹泡虫"
   },
   {
    "bvid": "BV1xBKTzwEU6",
    "p": 12,
    "label": "第26集 帮寄居蟹找房子"
   },
   {
    "bvid": "BV1xBKTzwEU6",
    "p": 13,
    "label": "第33集 孤单的黄金蝙蝠"
   },
   {
    "bvid": "BV1xBKTzwEU6",
    "p": 14,
    "label": "第34集 金花鼠哥哥来了"
   },
   {
    "bvid": "BV1xBKTzwEU6",
    "p": 15,
    "label": "第36集 害羞的猞猁"
   },
   {
    "bvid": "BV1xBKTzwEU6",
    "p": 16,
    "label": "第37集 你是乌龟呀 还是石头呀"
   },
   {
    "bvid": "BV1xBKTzwEU6",
    "p": 17,
    "label": "第38集 实现愿望的狐狸奶奶"
   },
   {
    "bvid": "BV1xBKTzwEU6",
    "p": 18,
    "label": "第44集 抓住黄鼠狼的尾巴"
   },
   {
    "bvid": "BV1xBKTzwEU6",
    "p": 19,
    "label": "第47集 别害怕小豺狼"
   },
   {
    "bvid": "BV1xBKTzwEU6",
    "p": 20,
    "label": "第48集 做好朋友吧"
   },
   {
    "bvid": "BV1xBKTzwEU6",
    "p": 21,
    "label": "第52集 雪人雪人一起来玩吧"
   },
   {
    "bvid": "BV1xBKTzwEU6",
    "p": 22,
    "label": "第01集 蝴蝶王子"
   },
   {
    "bvid": "BV1xBKTzwEU6",
    "p": 23,
    "label": "第07集 大力士独角仙"
   },
   {
    "bvid": "BV1xBKTzwEU6",
    "p": 24,
    "label": "第09集 安全驾驶很重要"
   },
   {
    "bvid": "BV1xBKTzwEU6",
    "p": 25,
    "label": "第12集 寻找鸳鸯奶奶"
   },
   {
    "bvid": "BV1xBKTzwEU6",
    "p": 26,
    "label": "第14集 负子蝽叔叔"
   },
   {
    "bvid": "BV1xBKTzwEU6",
    "p": 27,
    "label": "第18集 小伙伴 加油"
   },
   {
    "bvid": "BV1xBKTzwEU6",
    "p": 28,
    "label": "第20集 喇叭花传话筒"
   },
   {
    "bvid": "BV1xBKTzwEU6",
    "p": 29,
    "label": "第26集 去猪阿姨家做客"
   },
   {
    "bvid": "BV1xBKTzwEU6",
    "p": 30,
    "label": "第27集 开船去大海"
   },
   {
    "bvid": "BV1xBKTzwEU6",
    "p": 31,
    "label": "第29集 泥浆小怪物"
   },
   {
    "bvid": "BV1xBKTzwEU6",
    "p": 32,
    "label": "第32集 麦奇与小德的冒险 下"
   },
   {
    "bvid": "BV1xBKTzwEU6",
    "p": 33,
    "label": "第43集 爱美的孔雀叔叔"
   },
   {
    "bvid": "BV1xBKTzwEU6",
    "p": 34,
    "label": "第45集 追踪小鲑鱼"
   },
   {
    "bvid": "BV1xBKTzwEU6",
    "p": 35,
    "label": "第47集 小松鼠当爸爸"
   }
  ]
 },
 {
  "type": "single",
  "id": "BV1prsnzGEeY",
  "title": "磨耳朵经典英文儿歌大合集",
  "channel": "尖子生动画站",
  "category": "英语启蒙",
  "minAge": 2,
  "reason": "经典童谣大杂烩，当背景音磨耳朵都合适",
  "pic": "https://i1.hdslb.com/bfs/archive/a2a2d4b70618802bcf23a997f332f7932ff41197.jpg"
 },
 {
  "type": "series",
  "title": "小古文100课 · 阿紫老师精讲",
  "channel": "阿紫老师本人",
  "category": "小古文",
  "minAge": 6,
  "reason": "从《放风筝》《乡村》这类生活小文起步，到成语寓言，一课一讲，适合每天一课打卡",
  "caution": "已收录 22 讲，其余课程可稍后补充",
  "pic": "https://i1.hdslb.com/bfs/archive/b8dcb442fc104288c5c9a7865bdd9d6dd7695567.jpg",
  "episodes": [
   {
    "bvid": "BV1iU4y1Q7Xq",
    "label": "第1课 · 放风筝"
   },
   {
    "bvid": "BV14N4y1g7jG",
    "label": "第2课 · 乡村"
   },
   {
    "bvid": "BV1zB4y1v7PB",
    "label": "第3课 · 芦花"
   },
   {
    "bvid": "BV1RB4y1v7Xw",
    "label": "第4课 · 荷花"
   },
   {
    "bvid": "BV16S4y1n7zT",
    "label": "第5课 · 菊"
   },
   {
    "bvid": "BV1D94y1X7vB",
    "label": "第6课 · 雨"
   },
   {
    "bvid": "BV1WB4y1e7zT",
    "label": "第7课 · 雪"
   },
   {
    "bvid": "BV1u34y1H7ue",
    "label": "第8课 · 日月星"
   },
   {
    "bvid": "BV1S3411c7Jd",
    "label": "第9课 · 日时"
   },
   {
    "bvid": "BV1Ue4y1R7HK",
    "label": "第10课 · 猫捕鱼"
   },
   {
    "bvid": "BV1Qr4y1E7ZL",
    "label": "第11课 · 猫斗"
   },
   {
    "bvid": "BV1kt4y14734",
    "label": "第13课 · 五官争功"
   },
   {
    "bvid": "BV1SS4y177H5",
    "label": "第18课 · 岁寒三友"
   },
   {
    "bvid": "BV1oG4y1v7An",
    "label": "第19课 · 读书"
   },
   {
    "bvid": "BV1Ze4y197Av",
    "label": "第20课 · 读书有三到"
   },
   {
    "bvid": "BV12d4y1Q7Pp",
    "label": "第22课 · 铁杵磨针"
   },
   {
    "bvid": "BV11S4y1t7vA",
    "label": "第23课 · 曹冲称象"
   },
   {
    "bvid": "BV1LW4y1a7oV",
    "label": "第26课 · 孔融让梨"
   },
   {
    "bvid": "BV1884y1Y7JY",
    "label": "第29课 · 狐假虎威"
   },
   {
    "bvid": "BV1rg411W7Vu",
    "label": "第30课 · 南辕北辙"
   },
   {
    "bvid": "BV1Md4y1E7dU",
    "label": "第31课 · 盘古开天地"
   },
   {
    "bvid": "BV1tg4y137qr",
    "label": "第37课 · 推敲"
   }
  ]
 },
 {
  "type": "collection",
  "id": "BV1jD4y1z77e",
  "title": "小古文100课（上篇）动画版",
  "channel": "DDMMZYBK",
  "category": "小古文",
  "minAge": 6,
  "reason": "动画演绎《荷》《菊》《雪》等经典小古文，画面古雅，孩子当动画片看就把古文听了",
  "episodes": [
   {
    "bvid": "BV1jD4y1z77e",
    "p": 1,
    "label": "004荷"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 2,
    "label": "005.菊"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 3,
    "label": "012龟兔赛跑"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 4,
    "label": "013五官争功 (1)"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 5,
    "label": "015桂"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 6,
    "label": "016莲"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 7,
    "label": "017杨柳"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 8,
    "label": "018岁寒三友"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 9,
    "label": "022铁杵磨成针"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 10,
    "label": "023曹冲称象"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 11,
    "label": "024道边苦李"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 12,
    "label": "025破瓮救友.mp4"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 13,
    "label": "26-画蛇添足"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 14,
    "label": "027守株待兔"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 15,
    "label": "028揠苗助长"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 16,
    "label": "030南辕北辙"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 17,
    "label": "031盘古开天"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 18,
    "label": "032夸父逐日"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 19,
    "label": "033共工触山"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 20,
    "label": "035舜耕历山.mp4"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 21,
    "label": "036欧阳修苦读"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 22,
    "label": "037推敲的来历"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 23,
    "label": "038怀素写字"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 24,
    "label": "039王冕好学"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 25,
    "label": "040宋濂嗜学"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 26,
    "label": "042鹊"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 27,
    "label": "043鹦鹉救火"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 28,
    "label": "044义犬救主"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 29,
    "label": "045已死的母熊"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 30,
    "label": "046叶公好龙"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 31,
    "label": "048买椟还珠"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 32,
    "label": "049自相矛盾"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 33,
    "label": "050滥竽充数"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 34,
    "label": "50-酒虫"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 35,
    "label": "051山川之美"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 36,
    "label": "052春日寻芳"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 37,
    "label": "053苏堤杂花"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 38,
    "label": "056大禹治水"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 39,
    "label": "061慢性子"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 40,
    "label": "062急性子"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 41,
    "label": "063刚烈性子"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 42,
    "label": "064北人食菱"
   },
   {
    "bvid": "BV1jD4y1z77e",
    "p": 43,
    "label": "066李广射虎"
   }
  ]
 },
 {
  "type": "collection",
  "id": "BV1ha4qzgEjB",
  "title": "小学生小古文100课 · 逐句精讲",
  "channel": "小中高学习课堂",
  "category": "小古文",
  "minAge": 7,
  "reason": "从《放风筝》第一课逐句精讲，没接触过文言文也能跟上",
  "episodes": [
   {
    "bvid": "BV1ha4qzgEjB",
    "p": 1,
    "label": "第1课《放风筝》"
   },
   {
    "bvid": "BV1ha4qzgEjB",
    "p": 2,
    "label": "第2课《乡村》"
   },
   {
    "bvid": "BV1ha4qzgEjB",
    "p": 3,
    "label": "第3课《芦花》"
   },
   {
    "bvid": "BV1ha4qzgEjB",
    "p": 4,
    "label": "第4课《荷》"
   },
   {
    "bvid": "BV1ha4qzgEjB",
    "p": 5,
    "label": "第6课《雨》"
   },
   {
    "bvid": "BV1ha4qzgEjB",
    "p": 6,
    "label": "第7课《雪》"
   },
   {
    "bvid": "BV1ha4qzgEjB",
    "p": 7,
    "label": "第13课《五官争功》"
   },
   {
    "bvid": "BV1ha4qzgEjB",
    "p": 8,
    "label": "第14课《松》"
   },
   {
    "bvid": "BV1ha4qzgEjB",
    "p": 9,
    "label": "第15课《桂》"
   },
   {
    "bvid": "BV1ha4qzgEjB",
    "p": 10,
    "label": "第16《莲》"
   },
   {
    "bvid": "BV1ha4qzgEjB",
    "p": 11,
    "label": "第17课《杨柳》"
   },
   {
    "bvid": "BV1ha4qzgEjB",
    "p": 12,
    "label": "第18课《岁寒三友》"
   },
   {
    "bvid": "BV1ha4qzgEjB",
    "p": 13,
    "label": "第22课《铁杵磨针》"
   },
   {
    "bvid": "BV1ha4qzgEjB",
    "p": 14,
    "label": "第23课《曹冲称象》"
   },
   {
    "bvid": "BV1ha4qzgEjB",
    "p": 15,
    "label": "第24课《道边李苦》"
   },
   {
    "bvid": "BV1ha4qzgEjB",
    "p": 16,
    "label": "第25课《破瓮救友》"
   },
   {
    "bvid": "BV1ha4qzgEjB",
    "p": 17,
    "label": "第26课《孔融让梨》"
   },
   {
    "bvid": "BV1ha4qzgEjB",
    "p": 18,
    "label": "第27课《守株待兔》"
   }
  ]
 },
 {
  "type": "collection",
  "id": "BV1wr4y1X7Ku",
  "title": "爱上小古文（精选 18 讲）",
  "channel": "嘉妈de学习宝藏王国",
  "category": "小古文",
  "minAge": 6,
  "reason": "短小、有意思的小古文入门合集，雪、荷、菊这些自然主题和科普兴趣能接上",
  "episodes": [
   {
    "bvid": "BV1wr4y1X7Ku",
    "p": 1,
    "label": "01-雪 01"
   },
   {
    "bvid": "BV1wr4y1X7Ku",
    "p": 2,
    "label": "02-荷 02"
   },
   {
    "bvid": "BV1wr4y1X7Ku",
    "p": 3,
    "label": "03-菊 03"
   },
   {
    "bvid": "BV1wr4y1X7Ku",
    "p": 4,
    "label": "04-桂 04"
   },
   {
    "bvid": "BV1wr4y1X7Ku",
    "p": 5,
    "label": "05-莲 05"
   },
   {
    "bvid": "BV1wr4y1X7Ku",
    "p": 6,
    "label": "07-岁寒三友 07"
   },
   {
    "bvid": "BV1wr4y1X7Ku",
    "p": 7,
    "label": "08-乡村 08"
   },
   {
    "bvid": "BV1wr4y1X7Ku",
    "p": 8,
    "label": "09-苏堤杂花 09"
   },
   {
    "bvid": "BV1wr4y1X7Ku",
    "p": 9,
    "label": "10-春日寻芳 10"
   },
   {
    "bvid": "BV1wr4y1X7Ku",
    "p": 10,
    "label": "11-山川之美 11"
   },
   {
    "bvid": "BV1wr4y1X7Ku",
    "p": 11,
    "label": "12-乌鸦和狐狸 12"
   },
   {
    "bvid": "BV1wr4y1X7Ku",
    "p": 12,
    "label": "13-鹿照水 13"
   },
   {
    "bvid": "BV1wr4y1X7Ku",
    "p": 13,
    "label": "14-豺烹羊 14"
   },
   {
    "bvid": "BV1wr4y1X7Ku",
    "p": 14,
    "label": "16-杉苇刚柔 16"
   },
   {
    "bvid": "BV1wr4y1X7Ku",
    "p": 15,
    "label": "17-龟兔赛跑 17"
   },
   {
    "bvid": "BV1wr4y1X7Ku",
    "p": 16,
    "label": "18-五官争功 18"
   },
   {
    "bvid": "BV1wr4y1X7Ku",
    "p": 17,
    "label": "19-滥竽充数 19"
   },
   {
    "bvid": "BV1wr4y1X7Ku",
    "p": 18,
    "label": "20-揠苗助长 20"
   }
  ]
 },
 {
  "type": "single",
  "id": "BV1GQ4y1Y7HJ",
  "title": "虎鲸：又萌又猛的海上霸主",
  "channel": "画渣花小烙",
  "category": "动物与植物科普",
  "minAge": 5,
  "reason": "萌系动画科普，几分钟讲透虎鲸为什么是海上霸主",
  "pic": "https://i1.hdslb.com/bfs/archive/e58f145a305cff73dbd4bbdafbaeae57116063dc.jpg"
 },
 {
  "type": "single",
  "id": "BV1je4y177Ln",
  "title": "花生并不是从根部长出来的！",
  "channel": "画渣花小烙",
  "category": "动物与植物科普",
  "minAge": 5,
  "reason": "一个'居然是这样'的植物冷知识，孩子会立刻想去验证",
  "pic": "https://i1.hdslb.com/bfs/archive/eb8d22e1939a03594d8dc0735f6c0844a8395495.jpg"
 },
 {
  "type": "single",
  "id": "BV1Vc411E7xx",
  "title": "为了酿蜂蜜，蜜蜂有多努力？",
  "channel": "脑内有料",
  "category": "动物与植物科普",
  "minAge": 5,
  "reason": "从一颗蜂蜜讲昆虫协作，孩子爱吃蜂蜜所以有共鸣",
  "pic": "https://i1.hdslb.com/bfs/archive/9bb670f23ced7f0f39dae957c084522e52c72c53.jpg"
 },
 {
  "type": "single",
  "id": "BV1cL4y1A78T",
  "title": "水果猎人 · 网络热门水果鉴定",
  "channel": "水果猎人杨晓洋",
  "category": "动物与植物科普",
  "minAge": 5,
  "reason": "水果+植物学，主讲人热情有感染力，看完就想逛水果店",
  "pic": "https://i1.hdslb.com/bfs/archive/d1cb83c4e489c44b14b1404294be9e7c5a6ff7fd.jpg"
 },
 {
  "type": "single",
  "id": "BV1YwLEzZEGS",
  "title": "游隼：那些杀不死我的，终将跪倒在我的利爪之下",
  "channel": "即刻自然说",
  "category": "动物与植物科普",
  "minAge": 6,
  "reason": "电影级野生动物摄影，讲游隼的生存故事，美且震撼",
  "pic": "https://i1.hdslb.com/bfs/archive/42f3d0e5993110fd01624f53209972a684e77a8a.jpg"
 },
 {
  "type": "single",
  "id": "BV15jGJztEk7",
  "title": "鲸落：一鲸落，万物生",
  "channel": "即刻自然说",
  "category": "动物与植物科普",
  "minAge": 6,
  "reason": "一头鲸沉入深海如何养活整片生态，自然的浪漫与克制",
  "pic": "https://i1.hdslb.com/bfs/archive/c6665c8f4c1a7e2131e73587900382bd77c36c12.jpg"
 },
 {
  "type": "single",
  "id": "BV1yV4y1A79U",
  "title": "无穷小亮 · 网络热传生物鉴定 45",
  "channel": "无穷小亮的科普日常",
  "category": "动物与植物科普",
  "minAge": 6,
  "reason": "网络热传生物鉴别，练'别轻信'的科学眼光，还很好笑",
  "pic": "https://i1.hdslb.com/bfs/archive/bbb42d0278043b0f4267803ef556070da349ae6b.jpg"
 },
 {
  "type": "single",
  "id": "BV1Qf4y1D7WC",
  "title": "无穷小亮 · 网络热传生物鉴定 15",
  "channel": "无穷小亮的科普日常",
  "category": "动物与植物科普",
  "minAge": 6,
  "reason": "同上，收藏夹常客，一集十分钟不知不觉看完",
  "pic": "https://i1.hdslb.com/bfs/archive/5a2433352f268f39648a4d371d41ab1d527691c5.jpg"
 },
 {
  "type": "single",
  "id": "BV1gC4y1A7gn",
  "title": "现实中的'毁灭菇'是什么？",
  "channel": "蘑菇球Mugoture",
  "category": "动物与植物科普",
  "minAge": 6,
  "reason": "从游戏角色讲到真实真菌，游戏迷与自然迷的交汇点",
  "pic": "https://i1.hdslb.com/bfs/archive/b0dbff3a6315267abf554a2dbd081a397e613988.jpg"
 },
 {
  "type": "single",
  "id": "BV1w94y1A7Ri",
  "title": "全球首例'海蘑菇'在深圳发现",
  "channel": "蘑菇球Mugoture",
  "category": "动物与植物科普",
  "minAge": 6,
  "reason": "就发生在我们深圳的身边自然，孩子会问'在哪发现的！'",
  "pic": "https://i1.hdslb.com/bfs/archive/06ce87aa13ce7926baf3f4b72b5685e351f1126a.jpg"
 },
 {
  "type": "single",
  "id": "BV1TY4y1S7wT",
  "title": "来看看你身边藏着多少国家保护植物？",
  "channel": "陈大奇的百草园",
  "category": "动物与植物科普",
  "minAge": 6,
  "reason": "小区里、公园里的保护植物，把'自然'拉回散步路上",
  "pic": "https://i1.hdslb.com/bfs/archive/fa3a5b0a68e7736de840eefe35862e1c4293ff89.jpg"
 },
 {
  "type": "single",
  "id": "BV1jyyhBfEeD",
  "title": "我蓝色的血液救过你的命",
  "channel": "可乐动物园",
  "category": "动物与植物科普",
  "minAge": 6,
  "reason": "鲎的蓝血与人类医学，一个又怪又感人的生物故事",
  "pic": "https://i1.hdslb.com/bfs/archive/e0fd3f894ef951b62a8076a6c8591c7831ccede8.jpg"
 },
 {
  "type": "single",
  "id": "BV18ZZiBaEsS",
  "title": "动物们为什么还没进化出怕人？",
  "channel": "行者道荣",
  "category": "动物与植物科普",
  "minAge": 8,
  "reason": "一个反直觉的问题，练因果推理，适合睡前讨论",
  "pic": "https://i1.hdslb.com/bfs/archive/d663d1ddce506bf12fd46a9de0101bfd2ca7f2fb.jpg"
 },
 {
  "type": "single",
  "id": "BV1JN41177QJ",
  "title": "盛夏的墨脱，是昆虫与植物的盛宴",
  "channel": "无穷小亮的科普日常",
  "category": "动物与植物科普",
  "minAge": 8,
  "reason": "跟随科考视角走进藏南，更完整的自然纪录片体验",
  "pic": "https://i1.hdslb.com/bfs/archive/e799d2907ffe5908857447950a916752ba60f0fc.jpg"
 }
];

const CATEGORIES = [
 {
  "key": "全部",
  "en": "All"
 },
 {
  "key": "英语启蒙",
  "en": "English starters"
 },
 {
  "key": "动物与植物科普",
  "en": "Nature & plants"
 },
 {
  "key": "国际象棋启蒙",
  "en": "Chess for beginners"
 },
 {
  "key": "小古文",
  "en": "Classical Chinese"
 }
];
