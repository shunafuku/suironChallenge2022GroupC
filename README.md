# suironChallenge2022GroupC
## 色々適当に入れていきます。

```sparql
#床にあるオブジェクトを取得
PREFIX ob: <http://raw.githubusercontent.com/aistairc/HomeObjectOntology/main/HomeObject.owl#>
PREFIX : <http://example.org/virtualhome2kg/ontology/>
PREFIX vh2kg: <http://example.org/virtualhome2kg/ontology/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
select DISTINCT ?onFloorObject where {
    # aはrdf:typeの略
    ?floor a vh2kg:Floor .
    ?floorState vh2kg:isStateOf ?floor ;
                vh2kg:bbox ?floorShape .
    ?onFloorShape :on ?floorShape .
    ?onFloorState vh2kg:bbox ?onFloorShape ;
                  vh2kg:isStateOf ?onFloorObject .
}
```

```sparql
#livingroom にあるオブジェクト一覧
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX vh2kg: <http://example.org/virtualhome2kg/ontology/>
PREFIX x3do: <https://www.web3d.org/specifications/X3dOntology4.0#>
select DISTINCT ?livingroomObject  where { 
    ?Object rdf:type vh2kg:Livingroom .
    ?State vh2kg:isStateOf ?Object .
    ?State vh2kg:bbox ?livingRoom.
    ?livingroomObjectShape vh2kg:inside ?livingRoom .
    ?livingroomObjectState vh2kg:bbox ?livingroomObjectShape ;
                           vh2kg:isStateOf ?livingroomObject .
}
```


```sparql
#座っている時間を取得するクエリ
PREFIX ho: <http://www.owl-ontologies.com/VirtualHome.owl#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX : <http://example.org/virtualhome2kg/ontology/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX ac: <http://example.org/virtualhome2kg/ontology/action/>
PREFIX vh2kg: <http://example.org/virtualhome2kg/ontology/>
PREFIX vh2kgAction: <http://example.org/virtualhome2kg/ontology/action/>
select ?mainObject (sum(?numericDuration) as ?sum) where { 
    ?Event vh2kg:action vh2kgAction:sit;
           vh2kg:time ?Temporal;
           vh2kg:mainObject ?mainObject.
    ?Temporal <http://www.w3.org/2006/time#numericDuration> ?numericDuration.
}GROUP BY ?mainObject
```


```sparql
#使用されているAttribute一覧
PREFIX ex: <http://example.org/virtualhome2kg/instance/>
PREFIX vh2kg: <http://example.org/virtualhome2kg/ontology/>
PREFIX vh2kgAction: <http://example.org/virtualhome2kg/ontology/action/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
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

