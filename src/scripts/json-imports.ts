/**
 * JSONのインポートと結合
 * 
 * npc販売物に関してはゾーン情報がファイル名にしかないので、
 * この処理内で結合前に処理している。
 */

/**
 * レシピ
 */
import recipe01 from '../moecoop-data/resource/レシピ/料理.json';
import recipe02 from '../moecoop-data/resource/レシピ/醸造.json';
import recipe03 from '../moecoop-data/resource/レシピ/鍛冶.json';
import recipe04 from '../moecoop-data/resource/レシピ/木工.json';
import recipe05 from '../moecoop-data/resource/レシピ/裁縫.json';
import recipe06 from '../moecoop-data/resource/レシピ/装飾細工.json';
import recipe07 from '../moecoop-data/resource/レシピ/複製.json';
import recipe08 from '../moecoop-data/resource/レシピ/薬調合.json';
import recipe09 from '../moecoop-data/resource/レシピ/合成.json';
import recipe10 from '../moecoop-data/resource/レシピ/複合.json';

import recipe20 from '../spot-moecoop-data/resource/レシピ/複製.json';

/**
 * moecoop-data
 * npc販売情報
 */

import npc01 from '../moecoop-data/resource/売店/present/アルビーズの森.json';
import npc02 from '../moecoop-data/resource/売店/present/イルヴァーナ渓谷.json';
import npc03 from '../moecoop-data/resource/売店/present/エイシス・ケイブ.json';
import npc04 from '../moecoop-data/resource/売店/present/エルビン山脈.json';
import npc05 from '../moecoop-data/resource/売店/present/エルビン渓谷.json';
import npc06 from '../moecoop-data/resource/売店/present/ヌブールの村.json';
import npc07 from '../moecoop-data/resource/売店/present/ネオク山.json';
import npc08 from '../moecoop-data/resource/売店/present/ネオク高原.json';
import npc09 from '../moecoop-data/resource/売店/present/ビスク地下水路.json';
import npc10 from '../moecoop-data/resource/売店/present/ミーリム海岸.json';
import npc11 from '../moecoop-data/resource/売店/present/ムトゥーム地下墓地.json';
import npc12 from '../moecoop-data/resource/売店/present/城下町ビスク.json';
import npc13 from '../moecoop-data/resource/売店/present/隠れ里ネヤ.json';
import npc14 from '../moecoop-data/resource/売店/present/飛竜の谷.json';

/**
 * moecoop-data
 * アイテム
 * 
 * なんか課金アイテムだけファイルレイアウトが異なる
 * また、アイテム生産に課金グラ装備が関係するとも思えなかったため、いったん対象をコメントアウトする。
 */
/*
import item01 from '../moecoop-data/resource/アイテム/課金アイテム/グラ装備1.json';
import item02 from '../moecoop-data/resource/アイテム/課金アイテム/グラ装備2.json';
import item03 from '../moecoop-data/resource/アイテム/課金アイテム/グラ装備3.json';
import item04 from '../moecoop-data/resource/アイテム/課金アイテム/グラ装備4.json';
import item05 from '../moecoop-data/resource/アイテム/課金アイテム/グラ装備5.json';
import item06 from '../moecoop-data/resource/アイテム/課金アイテム/グラ装備6.json';
import item07 from '../moecoop-data/resource/アイテム/課金アイテム/グラ装備7.json';
import item08 from '../moecoop-data/resource/アイテム/課金アイテム/グラ装備8.json';
import item09 from '../moecoop-data/resource/アイテム/課金アイテム/グラ装備9.json';
import item10 from '../moecoop-data/resource/アイテム/課金アイテム/グラ装備10.json';
import item11 from '../moecoop-data/resource/アイテム/課金アイテム/グラ装備SP1.json';
import item12 from '../moecoop-data/resource/アイテム/課金アイテム/グラ装備SP2.json';
import item13 from '../moecoop-data/resource/アイテム/課金アイテム/グラ装備SP3.json';
import item14 from '../moecoop-data/resource/アイテム/課金アイテム/グラ装備SP4.json';
*/


import item21 from '../moecoop-data/resource/アイテム/武器/弓.json';
import item22 from '../moecoop-data/resource/アイテム/武器/銃器.json';
import item23 from '../moecoop-data/resource/アイテム/武器/生産道具.json';
import item24 from '../moecoop-data/resource/アイテム/武器/素手.json';
import item25 from '../moecoop-data/resource/アイテム/武器/槍.json';
import item26 from '../moecoop-data/resource/アイテム/武器/弾.json';
import item27 from '../moecoop-data/resource/アイテム/武器/刀剣.json';
import item28 from '../moecoop-data/resource/アイテム/武器/本.json';
import item29 from '../moecoop-data/resource/アイテム/武器/棍棒.json';
import item30 from '../moecoop-data/resource/アイテム/武器/楽器.json';

import item41 from '../moecoop-data/resource/アイテム/防具/イベント2.json';
import item42 from '../moecoop-data/resource/アイテム/防具/顔_装飾.json';
import item43 from '../moecoop-data/resource/アイテム/防具/胸_装飾.json';
import item44 from '../moecoop-data/resource/アイテム/防具/金属.json';
import item45 from '../moecoop-data/resource/アイテム/防具/腰_装飾.json';
import item46 from '../moecoop-data/resource/アイテム/防具/指_装飾.json';
import item47 from '../moecoop-data/resource/アイテム/防具/耳_装飾.json';
import item48 from '../moecoop-data/resource/アイテム/防具/盾.json';
import item49 from '../moecoop-data/resource/アイテム/防具/頭_装飾.json';
import item50 from '../moecoop-data/resource/アイテム/防具/特産品.json';
import item51 from '../moecoop-data/resource/アイテム/防具/背中_装飾.json';
import item52 from '../moecoop-data/resource/アイテム/防具/非金属.json';
import item53 from '../moecoop-data/resource/アイテム/防具/ジャスパー.json';
import item54 from '../moecoop-data/resource/アイテム/防具/楽器.json';


import item61 from '../moecoop-data/resource/アイテム/ジャスパー.json';
import item62 from '../moecoop-data/resource/アイテム/その他.json';
import item63 from '../moecoop-data/resource/アイテム/一般.json';
import item64 from '../moecoop-data/resource/アイテム/飲食物.json';
import item65 from '../moecoop-data/resource/アイテム/限定品.json';
import item66 from '../moecoop-data/resource/アイテム/消耗品.json';
import item67 from '../moecoop-data/resource/アイテム/美容.json';
import item68 from '../moecoop-data/resource/アイテム/宝石.json';
import item69 from '../moecoop-data/resource/アイテム/アセット.json';

import item99 from '../spot-moecoop-data/resource/アイテム/複製用・仮名.json'

export const recipes = recipe01.concat(recipe02).concat(recipe03).concat(recipe04).concat(recipe05).concat(recipe06).concat(recipe07).concat(recipe08).concat(recipe09).concat(recipe10).concat(recipe20);

// npc販売情報に地区情報付与して結合
export const npcs : moeCostJsonConv.NPC販売情報_エリア情報追加[] = [];


npc01.forEach(function(value){
    npcs.push(Object.assign(value,{"エリア":"アルビーズの森","時代":"Present Age"}))
});

for (const value of npc02){
    const npcsails:moeCostJsonConv.NPC販売情報_エリア情報追加 = Object.assign(value , {エリア:"イルヴァーナ渓谷","時代":"Present Age"});
    npcs.push(npcsails)
}
for (const value of npc03){
    const npcsails:moeCostJsonConv.NPC販売情報_エリア情報追加 = Object.assign(value , {エリア:"エイシス・ケイブ","時代":"Present Age"});
    npcs.push(npcsails)
}
for (const value of npc04){
    const npcsails:moeCostJsonConv.NPC販売情報_エリア情報追加 = Object.assign(value , {エリア:"エルビン山脈","時代":"Present Age"});
    npcs.push(npcsails)
}
for (const value of npc05){
    const npcsails:moeCostJsonConv.NPC販売情報_エリア情報追加 = Object.assign(value , {エリア:"エルビン渓谷","時代":"Present Age"});
    npcs.push(npcsails)
}
for (const value of npc06){
    const npcsails:moeCostJsonConv.NPC販売情報_エリア情報追加 = Object.assign(value , {エリア:"ヌブール村","時代":"Present Age"});
    npcs.push(npcsails)
}
for (const value of npc07){
    const npcsails:moeCostJsonConv.NPC販売情報_エリア情報追加 = Object.assign(value , {エリア:"ネオク山","時代":"Present Age"});
    npcs.push(npcsails)
}
for (const value of npc08){
    const npcsails:moeCostJsonConv.NPC販売情報_エリア情報追加 = Object.assign(value , {エリア:"ネオク高原","時代":"Present Age"});
    npcs.push(npcsails)
}
for (const value of npc09){
    const npcsails:moeCostJsonConv.NPC販売情報_エリア情報追加 = Object.assign(value , {エリア:"ビスク地下水路","時代":"Present Age"});
    npcs.push(npcsails)
}
for (const value of npc10){
    const npcsails:moeCostJsonConv.NPC販売情報_エリア情報追加 = Object.assign(value , {エリア:"ミーリム海岸","時代":"Present Age"});
    npcs.push(npcsails)
}
for (const value of npc11){
    const npcsails:moeCostJsonConv.NPC販売情報_エリア情報追加 = Object.assign(value , {エリア:"ムトゥーム地下墓地","時代":"Present Age"});
    npcs.push(npcsails)
}
for (const value of npc12){
    const npcsails:moeCostJsonConv.NPC販売情報_エリア情報追加 = Object.assign(value , {エリア:"城下町ビスク","時代":"Present Age"});
    npcs.push(npcsails)
}
for (const value of npc13){
    const npcsails:moeCostJsonConv.NPC販売情報_エリア情報追加 = Object.assign(value , {エリア:"隠れ里ネヤ","時代":"Present Age"});
    npcs.push(npcsails)
}
for (const value of npc14){
    const npcsails:moeCostJsonConv.NPC販売情報_エリア情報追加 = Object.assign(value , {エリア:"飛竜の谷","時代":"Present Age"});
    npcs.push(npcsails)
}

export const items:moeCostJsonConv.moecoopData.アイテム情報[] = item21.concat(item22).concat(item23).concat(item24).concat(item25).concat(item26).concat(item27).concat(item28).concat(item29).concat(item30)
            .concat(item41).concat(item42).concat(item43).concat(item44).concat(item45).concat(item46).concat(item47).concat(item48).concat(item49).concat(item50)
            .concat(item51).concat(item52).concat(item53).concat(item54)
            .concat(item61).concat(item62).concat(item63).concat(item64).concat(item65).concat(item66).concat(item67).concat(item68).concat(item69)
            .concat(item99);
