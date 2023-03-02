# suironChallenge2022GroupC
## 色々適当に入れていきます。

```sparql
#character以外の床にあるStateを取得
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX vh2kg: <http://example.org/virtualhome2kg/ontology/>
PREFIX ex: <http://example.org/virtualhome2kg/instance/>
select DISTINCT ?riskState where {
    # 指定のsituationのみにする
    ?riskState vh2kg:partOf ex:home_situation1_relax_on_sofa_while_watching_television2_scene7 .
    ?relationalState1 vh2kg:partOf ex:home_situation1_relax_on_sofa_while_watching_television2_scene7 .
    # floorのStateを取得
    ?relationalState1 vh2kg:isStateOf [a vh2kg:Floor] .
    # 床の上にあるStateを取得
    ?riskState vh2kg:bbox [vh2kg:on [vh2kg:isBboxOf ?relationalState1]] .
    # characterを除外
    MINUS {?riskState vh2kg:isStateOf [a vh2kg:Character]}.
}
```

```sparql
#汚れた床を取得
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX vh2kg: <http://example.org/virtualhome2kg/ontology/>
PREFIX ex: <http://example.org/virtualhome2kg/instance/>
select DISTINCT ?riskState where {
    # 指定のsituationのみにする
    ?riskState vh2kg:partOf ex:home_situation1_relax_on_sofa_while_watching_television2_scene7 .
    # floorのStateを取得
    ?riskState vh2kg:isStateOf [a vh2kg:Floor] .
    # 汚れた床を取得
    ?riskState vh2kg:state vh2kg:DIRTY .
}
```


```sparql
#livingroom にあるState全取得
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX vh2kg: <http://example.org/virtualhome2kg/ontology/>
select DISTINCT ?livingroomObject  where { 
    ?relationalState1 vh2kg:isStateOf [a vh2kg:Livingroom] .
    ?livingroomObjectState vh2kg:bbox [vh2kg:inside [vh2kg:isBboxOf ?relationalState1]] .
    ?livingroomObjectState vh2kg:isStateOf ?livingroomObject .
}
```

```sparql
#座っている時間を取得するクエリ
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX vh2kg: <http://example.org/virtualhome2kg/ontology/>
PREFIX ac: <http://example.org/virtualhome2kg/ontology/action/>
PREFIX time: <http://www.w3.org/2006/time#>
select ?mainObject (sum(?numericDuration) as ?sum) where { 
    ?Event vh2kg:action ac:sit ;
           vh2kg:mainObject ?mainObject ;
           vh2kg:time [time:numericDuration ?numericDuration] .
}GROUP BY ?mainObject
```


```sparql
#使用されているAttribute一覧
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX vh2kg: <http://example.org/virtualhome2kg/ontology/>
select DISTINCT ?Attribute where {
    ?Attribute rdf:type vh2kg:Attribute.
	?Object vh2kg:attribute ?Attribute.
}
```


```sparql
# 0.3メートル以下のまたぐことができるものを取得できる関数

PREFIX ex: <http://example.org/virtualhome2kg/instance/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX x3do: <https://www.web3d.org/specifications/X3dOntology4.0#>
PREFIX ac: <http://example.org/virtualhome2kg/ontology/action/>
PREFIX : <http://example.org/virtualhome2kg/ontology/>
CONSTRUCT {
    ?object :affords ac:straddle
}
WHERE {
    ?state :isStateOf ?object ;
            :bbox ?shape .
    ?shape x3do:bboxSize ?size .
    ?size rdf:rest/rdf:first ?size_y .
}GROUP BY ?object ?size_y
HAVING(?size_y < 0.3)
```

```sparql
#xyzの値を取得する
?shape x3do:bboxSize ?size ;
       x3do:bboxCenter ?center .
?center rdf:first ?center_x ;
         rdf:rest [rdf:first ?center_y ;
                rdf:rest [rdf:first ?center_z]] .
?size rdf:first ?size_x ;
      rdf:rest [rdf:first ?size_y ;
            rdf:rest [rdf:first ?size_z]] .
```

```sparql
#部屋一覧
PREFIX vh2kg: <http://example.org/virtualhome2kg/ontology/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
select ?room where {
    ?room rdfs:subClassOf vh2kg:Room .
}
```


```sparql
#0.3m以上のベッドを検出
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX vh2kg: <http://example.org/virtualhome2kg/ontology/>
PREFIX ex: <http://example.org/virtualhome2kg/instance/>
PREFIX x3do: <https://www.web3d.org/specifications/X3dOntology4.0#>
select DISTINCT ?riskItem ?riskItemValue1 where {
    # 指定のsituationのみにする
    ?riskItem vh2kg:partOf ex:home_situation1_relax_on_sofa_while_watching_television2_scene7 .
    ?relationalItem1 vh2kg:partOf ex:home_situation1_relax_on_sofa_while_watching_television2_scene7 .
    
    # floorのStateを取得
    ?relationalItem1 vh2kg:isStateOf [a vh2kg:Floor] .
    ?riskItem vh2kg:isStateOf [a vh2kg:Bed] .
    # sizeのy（高さ）を取得
    ?riskItem vh2kg:bbox [x3do:bboxSize [rdf:rest [rdf:first ?riskItemValue1 ]]]  .
    # 高さが0.3以上のもののみにする
    FILTER (?riskItemValue1 > 0.3)
}
```
