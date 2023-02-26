# suironChallenge2022GroupC
##色々適当に入れていきます。

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
