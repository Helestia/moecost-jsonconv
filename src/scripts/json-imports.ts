
type tRecipe = {
    名前 : string,
    材料 : {[s:string] : number},
    特殊消費? : {
        [s:string] : "消失" | "消費" | "未消費" | "失敗時消失"
    },
    生成物 : {[s:string] : number},
    テクニック : string[],
    スキル : {
        [s:string] : number
    },
    レシピが必要 : boolean,
    ギャンブル型 : boolean,
    ペナルティ型 : boolean,
    同時作成回数上限?: number,
    備考? : string
};

type tNpc = {
    名前: string,
    時代: "Present Age" | "War Age" | "Ancient Age"
    エリア: string,
    販売情報: {
        [s:string] : {
            価格: number,
            備考?: string
        }
    },
    備考?: string
}

type tItem = {
    名前: string,
    英名: string,
    info: string,
    NPC売却価格: number,
    重さ: number,
    転送できる: boolean,
    スタックできる: boolean,
    ペットアイテム?: {
        [s:string] : number
    },
    特殊条件?: t特殊条件[],
    備考?: string,
    種類: string
}

type t特殊条件 = "NT"|"OP"|"CS"|"CR"|"PM"|"NC"|"NB"|"ND"|"CA"|"DL"|"TC"|"LO"|"AL"|"WA";

const recipe01:tRecipe[] = require('../moecoop-data/resource/レシピ/料理.json');
const recipe02:tRecipe[] = require('../moecoop-data/resource/レシピ/醸造.json');
const recipe03:tRecipe[] = require('../moecoop-data/resource/レシピ/鍛冶.json');
const recipe04:tRecipe[] = require('../moecoop-data/resource/レシピ/木工.json');
const recipe05:tRecipe[] = require('../moecoop-data/resource/レシピ/裁縫.json');
const recipe06:tRecipe[] = require('../moecoop-data/resource/レシピ/装飾細工.json');
const recipe07:tRecipe[] = require('../moecoop-data/resource/レシピ/複製.json');
const recipe08:tRecipe[] = require('../moecoop-data/resource/レシピ/薬調合.json');
const recipe09:tRecipe[] = require('../moecoop-data/resource/レシピ/合成.json');
const recipe10:tRecipe[] = require('../moecoop-data/resource/レシピ/複合.json');

const recipe20:tRecipe[] = require('../spot-moecoop-data/resource/レシピ/複製.json');

/**
 * moecoop-data
 * npc販売情報
 */

const npc01:tNpc[] = require('../moecoop-data/resource/売店/present/アルビーズの森.json');
const npc02:tNpc[] = require('../moecoop-data/resource/売店/present/イルヴァーナ渓谷.json');
const npc03:tNpc[] = require('../moecoop-data/resource/売店/present/エイシス・ケイブ.json');
const npc04:tNpc[] = require('../moecoop-data/resource/売店/present/エルビン山脈.json');
const npc05:tNpc[] = require('../moecoop-data/resource/売店/present/エルビン渓谷.json');
const npc06:tNpc[] = require('../moecoop-data/resource/売店/present/ヌブールの村.json');
const npc07:tNpc[] = require('../moecoop-data/resource/売店/present/ネオク山.json');
const npc08:tNpc[] = require('../moecoop-data/resource/売店/present/ネオク高原.json');
const npc09:tNpc[] = require('../moecoop-data/resource/売店/present/ビスク地下水路.json');
const npc10:tNpc[] = require('../moecoop-data/resource/売店/present/ミーリム海岸.json');
const npc11:tNpc[] = require('../moecoop-data/resource/売店/present/ムトゥーム地下墓地.json');
const npc12:tNpc[] = require('../moecoop-data/resource/売店/present/城下町ビスク.json');
const npc13:tNpc[] = require('../moecoop-data/resource/売店/present/隠れ里ネヤ.json');
const npc14:tNpc[] = require('../moecoop-data/resource/売店/present/飛竜の谷.json');

const npc21:tNpc[] = require('../moecoop-data/resource/売店/Ancient/モラ・タワー.json');
const npc22:tNpc[] = require('../moecoop-data/resource/売店/Ancient/ソレス渓谷.json');
const npc23:tNpc[] = require('../moecoop-data/resource/売店/Ancient/ユグ海岸.json');
const npc24:tNpc[] = require('../moecoop-data/resource/売店/Ancient/ゲオの深淵_北東エリア.json');
const npc25:tNpc[] = require('../moecoop-data/resource/売店/Ancient/ゲオの深淵_西エリア.json');
const npc26:tNpc[] = require('../moecoop-data/resource/売店/Ancient/ゲオの深淵_南エリア.json');
const npc27:tNpc[] = require('../moecoop-data/resource/売店/Ancient/シスの天空島.json');
const npc28:tNpc[] = require('../moecoop-data/resource/売店/Ancient/ミトヤの大樹.json');
const npc29:tNpc[] = require('../moecoop-data/resource/売店/Ancient/旅の商人.json');

const npc41:tNpc[] = require('../moecoop-data/resource/売店/war/ヌブールの村.json');
const npc42:tNpc[] = require('../moecoop-data/resource/売店/war/タルタロッサ・パレス.json');
const npc43:tNpc[] = require('../moecoop-data/resource/売店/war/城下町ビスク.json');
const npc44:tNpc[] = require('../moecoop-data/resource/売店/war/エルガディン王国.json');
const npc45:tNpc[] = require('../moecoop-data/resource/売店/war/CCandDA.json');

/**
 * moecoop-data
 * アイテム
 * 
 * なんか課金アイテムだけファイルレイアウトが異なる
 * また、アイテム生産に課金グラ装備が関係するとも思えなかったため、いったん対象をコメントアウトする。
 */

const item01:tItem[] = require('../moecoop-data/resource/アイテム/課金アイテム/グラ装備1.json');
const item02:tItem[] = require('../moecoop-data/resource/アイテム/課金アイテム/グラ装備2.json');
const item03:tItem[] = require('../moecoop-data/resource/アイテム/課金アイテム/グラ装備3.json');
const item04:tItem[] = require('../moecoop-data/resource/アイテム/課金アイテム/グラ装備4.json');
const item05:tItem[] = require('../moecoop-data/resource/アイテム/課金アイテム/グラ装備5.json');
const item06:tItem[] = require('../moecoop-data/resource/アイテム/課金アイテム/グラ装備6.json');
const item07:tItem[] = require('../moecoop-data/resource/アイテム/課金アイテム/グラ装備7.json');
const item08:tItem[] = require('../moecoop-data/resource/アイテム/課金アイテム/グラ装備8.json');
const item09:tItem[] = require('../moecoop-data/resource/アイテム/課金アイテム/グラ装備9.json');
const item10:tItem[] = require('../moecoop-data/resource/アイテム/課金アイテム/グラ装備10.json');
const item11:tItem[] = require('../moecoop-data/resource/アイテム/課金アイテム/グラ装備SP1.json');
const item12:tItem[] = require('../moecoop-data/resource/アイテム/課金アイテム/グラ装備SP2.json');
const item13:tItem[] = require('../moecoop-data/resource/アイテム/課金アイテム/グラ装備SP3.json');
const item14:tItem[] = require('../moecoop-data/resource/アイテム/課金アイテム/グラ装備SP4.json');
const item15:tItem[] = require('../moecoop-data/resource/アイテム/課金アイテム/生産素材.json');



const item21:tItem[] = require('../moecoop-data/resource/アイテム/武器/弓.json');
const item22:tItem[] = require('../moecoop-data/resource/アイテム/武器/銃器.json');
const item23:tItem[] = require('../moecoop-data/resource/アイテム/武器/生産道具.json');
const item24:tItem[] = require('../moecoop-data/resource/アイテム/武器/素手.json');
const item25:tItem[] = require('../moecoop-data/resource/アイテム/武器/槍.json');
const item26:tItem[] = require('../moecoop-data/resource/アイテム/武器/弾.json');
const item27:tItem[] = require('../moecoop-data/resource/アイテム/武器/刀剣.json');
const item28:tItem[] = require('../moecoop-data/resource/アイテム/武器/本.json');
const item29:tItem[] = require('../moecoop-data/resource/アイテム/武器/棍棒.json');
const item30:tItem[] = require('../moecoop-data/resource/アイテム/武器/楽器.json');

const item41:tItem[] = require('../moecoop-data/resource/アイテム/防具/イベント2.json');
const item42:tItem[] = require('../moecoop-data/resource/アイテム/防具/顔_装飾.json');
const item43:tItem[] = require('../moecoop-data/resource/アイテム/防具/胸_装飾.json');
const item44:tItem[] = require('../moecoop-data/resource/アイテム/防具/金属.json');
const item45:tItem[] = require('../moecoop-data/resource/アイテム/防具/腰_装飾.json');
const item46:tItem[] = require('../moecoop-data/resource/アイテム/防具/指_装飾.json');
const item47:tItem[] = require('../moecoop-data/resource/アイテム/防具/耳_装飾.json');
const item48:tItem[] = require('../moecoop-data/resource/アイテム/防具/盾.json');
const item49:tItem[] = require('../moecoop-data/resource/アイテム/防具/頭_装飾.json');
const item50:tItem[] = require('../moecoop-data/resource/アイテム/防具/特産品.json');
const item51:tItem[] = require('../moecoop-data/resource/アイテム/防具/背中_装飾.json');
const item52:tItem[] = require('../moecoop-data/resource/アイテム/防具/非金属.json');
const item53:tItem[] = require('../moecoop-data/resource/アイテム/防具/ジャスパー.json');
const item54:tItem[] = require('../moecoop-data/resource/アイテム/防具/楽器.json');


const item61:tItem[] = require('../moecoop-data/resource/アイテム/ジャスパー.json');
const item62:tItem[] = require('../moecoop-data/resource/アイテム/その他.json');
const item63:tItem[] = require('../moecoop-data/resource/アイテム/一般.json');
const item64:tItem[] = require('../moecoop-data/resource/アイテム/飲食物.json');
const item65:tItem[] = require('../moecoop-data/resource/アイテム/限定品.json');
const item66:tItem[] = require('../moecoop-data/resource/アイテム/消耗品.json');
const item67:tItem[] = require('../moecoop-data/resource/アイテム/美容.json');
const item68:tItem[] = require('../moecoop-data/resource/アイテム/宝石.json');
const item69:tItem[] = require('../moecoop-data/resource/アイテム/アセット.json');

const item99:tItem[] = require('../spot-moecoop-data/resource/アイテム/複製用・仮名.json');

export const recipes = recipe01.concat(recipe02).concat(recipe03).concat(recipe04).concat(recipe05).concat(recipe06).concat(recipe07).concat(recipe08).concat(recipe09).concat(recipe10).concat(recipe20);

// npc販売情報に地区情報付与して結合
export const npcs = npc01.concat(npc02).concat(npc03).concat(npc04).concat(npc05).concat(npc06).concat(npc07).concat(npc08).concat(npc09).concat(npc10)
    .concat(npc11).concat(npc12).concat(npc13).concat(npc14)
    .concat(npc21).concat(npc22).concat(npc23).concat(npc24).concat(npc25).concat(npc26).concat(npc27).concat(npc28).concat(npc29)
    .concat(npc41).concat(npc42).concat(npc43).concat(npc44).concat(npc45)

export const items:moeCostJsonConv.moecoopData.アイテム情報[] = item01.concat(item02).concat(item03).concat(item04).concat(item05).concat(item06).concat(item07).concat(item08).concat(item09).concat(item10)
            .concat(item11).concat(item12).concat(item13).concat(item14).concat(item15)
            .concat(item21).concat(item22).concat(item23).concat(item24).concat(item25).concat(item26).concat(item27).concat(item28).concat(item29).concat(item30)
            .concat(item41).concat(item42).concat(item43).concat(item44).concat(item45).concat(item46).concat(item47).concat(item48).concat(item49).concat(item50)
            .concat(item51).concat(item52).concat(item53).concat(item54)
            .concat(item61).concat(item62).concat(item63).concat(item64).concat(item65).concat(item66).concat(item67).concat(item68).concat(item69)
            .concat(item99);
