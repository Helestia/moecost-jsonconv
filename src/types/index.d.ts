declare namespace moeCostJsonConv {
    type createItems = {
        [s:string] : number;
    }

    interface NPC販売情報_エリア情報追加 extends moecoopData.NPC販売情報 {
        エリア : string
    };

    interface レシピ副産物 extends moecoopData.レシピ {
        副産物? : {
            [s:string] : number
        }
    };

    namespace moecoopData {
        interface レシピ {
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
            備考? : string
        };
        interface NPC販売情報 {
            名前 : string,
            販売情報 : {
                [s:string] : {
                    価格 : number,
                    備考? : string
                }
            }
        };
        interface アイテム情報 {
            名前: string,
            英名: string,
            info: string,
            NPC売却価格 : number,
            重さ : number,
            転送できる : boolean,
            スタックできる : boolean,
            ペットアイテム? : {
                [s:string] : number | undefined
            },
            種類 : string,
            特殊条件? : string[],
            備考? : string
        }
    }
}

declare module '../moecoop-data/resource/レシピ/*.json' {
    interface recipe extends moeCostJsonConv.moecoopData.レシピ{}

    const value : recipe[];
    export = value;
}

declare module '../spot-moecoop-data/resource/レシピ/*.json' {
    interface recipe extends moeCostJsonConv.moecoopData.レシピ{}

    const value : recipe[];
    export = value;
}

declare module '../moecoop-data/resource/売店/*.json' {
    interface npcSales extends moeCostJsonConv.moecoopData.NPC販売情報{};

    const value : npcSales[];
    export = value;
}


declare module '../moecoop-data/resource/アイテム/*.json' {
    interface itemInfo extends moeCostJsonConv.moecoopData.アイテム情報{};

    const value : itemInfo[];
    export = value
}

declare module '../spot-moecoop-data/resource/アイテム/*.json' {
    interface itemInfo extends moeCostJsonConv.moecoopData.アイテム情報{};

    const value : itemInfo[];
    export = value
}

