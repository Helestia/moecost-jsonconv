import React from 'react';
import 'react-app-polyfill/ie11';
import {recipes,items,npcs} from './scripts/json-imports'

function main() {
  // レシピの加工１
  // 重複レシピ名の解消
  const r2 = recipes.map(val => {
    let rval = Object.assign(val,{});
    if(rval["名前"] === "砂糖"){
      rval["名前"] = "砂糖(キビ単品)";
    }
    if(rval["名前"] === "パン粉"){
      rval["名前"] = "パン粉(パン)";
    }
    if(rval["名前"] === "パン生地"){
      rval["名前"] = "パン生地(ミニ ウォーター ボトル)";
    }
    if(rval["名前"] === "ベーコン"){
      rval["名前"] = "ベーコン(ミニ ウォーター ボトル)";
    }
    if(rval["名前"] === "焼き鳥"){
      rval["名前"] = "焼き鳥(グリフォンの肉)";
    }
    if(rval["名前"] === "切り身魚のチーズ焼き"){
      rval["名前"] = "切り身魚のチーズ焼き(赤身魚の切り身)";
    }
    if(rval["名前"] === "焼きキノコ"){
      rval["名前"] = "焼きキノコ(アース マッシュルーム)";
    }
    if(rval["名前"] === "味噌汁"){
      rval["名前"] = "味噌汁(ミニ ウォーター ボトル)";
    }
    if(rval["名前"] === "お雑煮"){
      rval["名前"] = "お雑煮(醤油)";
    }
    if(rval["名前"] === "ショート ケーキ"){
      rval["名前"] = "ショート ケーキ(クリスマスケーキ)";
    }
    if(rval["名前"] === "フレーバード ティ"){
      rval["名前"] = "フレーバード ティ(イチゴ)";
    }
    if(rval["名前"] === "ゼラチン"){
      rval["名前"] = "ゼラチン(タイガー ボーン)";
    }
    if(rval["名前"] === "クロノスの涙"){
      rval["名前"] = "クロノスの涙(ボーン チップ)";
    }
    if(rval["名前"] === "クロノスの光"){
      rval["名前"] = "クロノスの光(ボーン チップ)";
    }
    if(rval["名前"] === "髪染め液"){
      rval["名前"] = "髪染め液(単独生産)";
    }
    if(rval["名前"] === "染色液"){
      rval["名前"] = "染色液(単独生産)";
    }
    if(rval["名前"] === "染色液(大)"){
      rval["名前"] = "染色液(大)(単独生産)";
    }
    if(rval["名前"] === "ポイズン ポーション" && rval["材料"]["ヘビの毒"]){
      rval["名前"] = "ポイズン ポーション(ヘビの毒)";
    }
    if(rval["名前"] === "ポイズン ポーション" && rval["材料"]["クモの毒"]){
      rval["名前"] = "ポイズン ポーション(クモの毒)";
    }
    if(rval["名前"] === "ガラス" && rval["スキル"]["鍛冶"]){
      rval["名前"] = "ガラス(鍛冶スキル)";
    }
    if(rval["名前"] === "ガラス" && rval["スキル"]["木工"]){
      rval["名前"] = "ガラス(木工スキル)";
    }
    if(rval["名前"] === "GG-04" && (! rval["材料"]["GG-03"])){
      rval["名前"] = "GG-04(直接生産)";
    }
    if(rval["名前"] === "GG-04" && rval["材料"]["GG-03"]){
      rval["名前"] = "GG-04(GG-03からの強化)";
    }
    if(rval["名前"] === "GG-05" && (! rval["材料"]["GG-04"])){
      rval["名前"] = "GG-05(直接生産)";
    }
    if(rval["名前"] === "GG-05" && rval["材料"]["GG-04"]){
      rval["名前"] = "GG-05(GG-04からの強化)";
    }
    if(rval["名前"] === "GG-06A" && (! rval["材料"]["GG-05"])){
      rval["名前"] = "GG-06A(直接生産)";
    }
    if(rval["名前"] === "GG-06A" && rval["材料"]["GG-05"]){
      rval["名前"] = "GG-06A(GG-05からの強化)";
    }
    return rval;
  });
  // 生成物が複数のレシピ対応
  // 生成物１つ＋副産物に変更
  const pushObjectAssembly = (
    obj:moeCostJsonConv.moecoopData.レシピ,
    name:string,
    create:moeCostJsonConv.createItems,
    byProduct:moeCostJsonConv.createItems
  ) => {
    const result : moeCostJsonConv.レシピ副産物 = Object.assign(obj,{});
    result.名前 = name;
    result.生成物 = create;
    result.副産物 = byProduct;
    return result;
  }

  const r3:moeCostJsonConv.レシピ副産物[] = [];
  r2.forEach(val => {
    if(val["名前"] === "精米 / 米ぬか"){
      r3.push(pushObjectAssembly(val,"精米",{"精米":2},{"米ぬか":1}));
      r3.push(pushObjectAssembly(val,"米ぬか",{"米ぬか":1},{"精米":2}));
    }
    else if(val["名前"] === "カニの足"){
      r3.push(pushObjectAssembly(val,"カニの足",{"カニの足":10},{"カニの甲羅":1}));
      r3.push(pushObjectAssembly(val,"カニの甲羅",{"カニの甲羅":1},{"カニの足":10}));
    }
    else if(val["名前"] === "かけそば"){
      r3.push(pushObjectAssembly(val,"かけそば",{"かけそば":2},{"そば湯":1}));
    }
    else if(val["名前"] === "ざるそば"){
      r3.push(pushObjectAssembly(val,"ざるそば",{"ざるそば":2},{"そば湯":1}));
    }
    else if(val["名前"] === "かけそば(十割そば)"){
      r3.push(pushObjectAssembly(val,"かけそば(十割そば)",{"かけそば":2},{"そば湯":1}));
    }
    else if(val["名前"] === "ざるそば(十割そば)"){
      r3.push(pushObjectAssembly(val,"ざるそば(十割そば)",{"ざるそば":2},{"そば湯":1}));
    }
    else if(val["名前"] === "岩茸のテンプラ"){
      r3.push(pushObjectAssembly(val,"岩茸のテンプラ",{"岩茸のテンプラ":5},{"揚げ玉":5}));
      r3.push(pushObjectAssembly(val,"揚げ玉(岩茸のテンプラ)",{"揚げ玉":5},{"岩茸のテンプラ":5}));
    }
    else if(val["名前"] === "かき揚げ"){
      r3.push(pushObjectAssembly(val,"かき揚げ",{"かき揚げ":5},{"揚げ玉":5}));
      r3.push(pushObjectAssembly(val,"揚げ玉(かき揚げ)",{"揚げ玉":5},{"かき揚げ":5}));
    }
    //背負い双剣（分離）・アイアンインゴットはレシピ未登録とする。
    else if((val["名前"] !== "背負い双剣(分離)") &&
       (val["名前"] !== "アイアンインゴット(鉄の棒)")){
      r3.push(val);
    }
  });
  return (
    <div>
      <ErrorNoItemsEntry
        recipes={r3}
        items={items} />
      <ErrorMultiCreateItems
        recipes={r3} />
      <DispRecipes
        recipes={r3} />
      <DispNpcs
        recipes={r3}
        npcs={npcs} />
      <DispItems
        recipes={r3}
        items={items} />
    </div>
  );
}

/**
 * ERROR
 * 生成物アイテムのアイテム情報なし 
 */
function ErrorNoItemsEntry(
  props:{
    recipes :moeCostJsonConv.レシピ副産物[],
    items :moeCostJsonConv.moecoopData.アイテム情報[]}
){
  const result:string[] = [];
  props.recipes.forEach((r) => {
    const createItem = Object.keys(r.生成物)[0];
    const findItem = items.find(item => item.名前 === createItem);
    if(findItem === undefined){
      result.push(r.名前);
    }
  });

  return (
    <div className="error">
      <h2>生成物アイテムのアイテム情報なし</h2>
      <textarea rows={10} cols={50} 
        value={JSON.stringify(result)} readOnly />
    </div>
  );
}
/**
 * ERROR
 * 生産品複数対象　mainで処理漏れしたアイテム
 */
function ErrorMultiCreateItems(
  props :{
    recipes : moeCostJsonConv.レシピ副産物[]
  }
){
  var result : string[] = [];
  props.recipes.forEach(r => {
    if(Object.keys(r.生成物).length > 1){
      result.push(r.名前);
    }
  });

  return (
    <div className="error">
      <h2>生成物アイテムが2つ以上</h2>
      <textarea rows={10} cols={50}
        value={JSON.stringify(result)} readOnly />
    </div>
  )
}

function DispRecipes(
  props : {
    recipes : moeCostJsonConv.レシピ副産物[]
  }
){
  const results = 
  props.recipes.reduce<moeCostJsonConv.outputRecipe[]>((acc,cur) => {
    type 材料 = {
      アイテム : string,
      個数? : number,
      特殊消費? : "消失" | "消費" | "未消費" | "失敗時消失"
    };
    type 生成物 = {
      アイテム : string,
      個数? : number
    }
    type 副産物 = {
      アイテム : string,
      個数? : number
    } | null

    type スキル = {
      スキル名 : string,
      スキル値 : number
    }

    // 材料情報の変形
    let materials : 材料[] = [];
    Object.keys(cur.材料).forEach(val => {
      let material : 材料 = {アイテム : val};
      if(cur.材料[val] !== 1){
        material.個数 = cur.材料[val];
      }
      if(cur.特殊消費 && cur.特殊消費[val]){
        material.特殊消費 = cur.特殊消費[val];
      }
      materials.push(material);
    });

    // 生産品情報のデータ変形
    const creationItem = Object.keys(cur.生成物)[0];
    let creation : 生成物 = {
      "アイテム" : creationItem
    };
    if(cur.生成物[creationItem] !== 1){
      creation.個数 = cur.生成物[creationItem];
    };

    // 副産物のデータ変形
    let byProductItems : {
      アイテム : string,
      個数? : number
    }[] | null = null
    if(cur.副産物){
      byProductItems =
        Object.keys(cur.副産物).reduce<{
          アイテム:string,
          個数?:number
        }[]>((acc,current) => {
          let result : {アイテム:string,個数?:number} = {アイテム : current};
          if(cur.副産物 && cur.副産物[current] !== 1){
            result.個数 = cur.副産物[current];
          }
          acc.push(result);
          return acc;
      },[])
    }

    // 要求スキルの変形
    let skills : スキル[] = Object.keys(cur.スキル).map(val => {
      return {スキル名 : val,スキル値 : cur.スキル[val]};
    })

    
    let result : moeCostJsonConv.outputRecipe = {
      レシピ名 : cur.名前,
      材料 : materials,
      生成物 : creation,
      テクニック : cur.テクニック,
      スキル : skills,
      要レシピ : cur.レシピが必要,
      ギャンブル : cur.ギャンブル型,
      ペナルティ : cur.ペナルティ型,
    };
    
    if(cur.備考){
      result.備考 = cur.備考
    }
    if(byProductItems){
      result.副産物 = byProductItems;
    }
    acc.push(result);
    return acc;
  },[])
  return (
    <div className="okJson">
      <h2>レシピ情報</h2>
      <textarea rows={10} cols={50}
        value={JSON.stringify(results)} readOnly />
    </div>
  )
}

function DispNpcs(
  props : {
    recipes : moeCostJsonConv.レシピ副産物[],
    npcs : moeCostJsonConv.NPC販売情報_エリア情報追加[]
  }
){
  const result : moeCostJsonConv.NPC販売情報_エリア情報追加[] = [];
  // レシピ利用アイテムのリスト化
  const recipeUseItems:string[] = [];
  props.recipes.forEach(recipe => {
    const itemEntry = (items:string[]) => {
      items.forEach(item=> {
        if(recipeUseItems.indexOf(item)){
          recipeUseItems.push(item);
        }
      })
    };
    itemEntry(Object.keys(recipe.材料));
    itemEntry(Object.keys(recipe.生成物));
    if(recipe.副産物){
      itemEntry(Object.keys(recipe.副産物));
    }
  });
  // レシピ使用アイテムのみ登録
  props.npcs.forEach(npc => {
    let entryedItems:{
      [s:string]:{
        価格 : number,
        備考? : string
      }} = {};
    Object.keys(npc.販売情報).forEach(item => {
      if(recipeUseItems.indexOf(item) !== -1){
        entryedItems[item] = npc.販売情報[item];
      }
    });
    if(Object.keys(entryedItems).length > 0){
      result.push({
        名前 : npc.名前,
        エリア : npc.エリア,
        販売情報 : entryedItems
      });
    }
  })
  return (
    <div className="okJson">
      <h2>NPC情報</h2>
      <textarea rows={10} cols={50}
        value={JSON.stringify(result)} readOnly />
    </div>
  )
}

function DispItems (
  props:{
    recipes : moeCostJsonConv.レシピ副産物[],
    items : moeCostJsonConv.moecoopData.アイテム情報[]
  }
){
  const result : {[s:string] : boolean} = {};
  const createItems : string[] = [];
  props.recipes.forEach(recipe => {
    const createItemName = Object.keys(recipe.生成物)[0];
    if(createItems.indexOf(createItemName) === -1){
      createItems.push(createItemName);
    }
  });
  items.forEach(item => {
    if(createItems.indexOf(item.名前) !== -1){
      result[item.名前] = item.スタックできる;
    }
  });
  return (
    <div className="okJson">
      <h2>アイテム情報</h2>
      <textarea rows={10} cols={50}
        value={JSON.stringify(result)} readOnly />
    </div>
  )
}


export default main;
