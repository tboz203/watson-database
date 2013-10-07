angular.module('DatabaseApp', ['ui.bootstrap']);

var DatabaseController = function($scope){
    $scope.message = "This is a test";

    $scope.current = {
    	act: "Action",
        relat: "relation",
        value1: "value",
        comp: "comparison",
        value2: "value"
    };

    $scope.relations = [
        {link: "rel1", name: "Relation 1"},
        {link: "rel2", name: "Relation 2"},
        {link: "rel3", name: "Relation 3"}
    ]

    $scope.getRelColumns = function($scope){
        return [
            {link: "val1", name: "Value 1"},
            {link: "val2", name: "Value 2"},
            {link: "val3", name: "Value 3"}
        ];
    }

    $scope.getRelConditions = function($scope){
        return [
            {link: "lt", name: "<"},
            {link: "le", name: "<="},
            {link: "gt", name: ">"},
            {link: "ge", name: ">="},
            {link: "eq", name: "="}
        ];
    }

    $scope.getComparisonValues = function($scope){
        return [
            {link: "val1", name: "Value 1"},
            {link: "val2", name: "Value 2"},
            {link: "val3", name: "Value 3"}
        ];
    }

    $scope.tables = {
        Test: {
            name: "Test",
            head: ["first", "second", "name", "id", "foobar"],
            rows: [
                [1, 2, 3, 4, 5],
                [6, 7, 8, 9, 0],
                ['a', 'b', 'c', 'd', 'e'],
                ['f', 'g', 'h', 'i', 'j']
            ]
        }, Students: {
            name: "Students",
            head: ["sname", "age", "major", "id", "sex", "address", "city", "state"],
            rows: [
                ["Anderson B.",     19, "CS",   55555501, "M", "101 Rocket Way",    "Atlantis",     "CA"],
                ["Barnes E.",       17, "Math", 55555502, "M", "1402 Elf Lane",     "Ruston",       "LA"],
                ["Bronson P.",      26, "Math", 55555503, "M", "1 Web Master",      "Ruston",       "LA"],
                ["Brooks D.",       18, "CS",   55555504, "F", "900 Baird Street",  "Dallas",       "TX"],
                ["Garret D.",       20, "PSY",  55555505, "M", "BGB Consulting",    "Dallas",       "TX"],
                ["Howard M.",       21, "CS",   55555506, "M", "5 Scarborough",     "Dallas",       "TX"],
                ["Huey B.",         20, "CS",   55555507, "F", "1 Historic Place",  "Jackson",      "MS"],
                ["Kleinpeter J.",   24, "CS",   55555508, "M", "69 Watson Lane",    "Ruston",       "LA"],
                ["Kyzar D.",        18, "CS",   55555509, "M", "49 Animae Way",     "Hammond",      "LA"],
                ["Moore D.",        19, "Math", 55555510, "M", "No. 7 Seagram",     "Ruston",       "LA"],
                ["Moore L.",        20, "Math", 55555511, "F", "2 Pot Place",       "New York",     "NY"],
                ["Morton M.",       30, "Acct", 55555512, "M", "2010 Skid Row",     "Compton",      "CA"],
                ["Pittard S.",      22, "Acct", 55555513, "M", "111 Easy Street",   "Ruston",       "LA"],
                ["Plock C.",        22, "MGT",  55555514, "M", "13 NSF Road",       "Ruston",       "LA"],
                ["Slack J.",        28, "PSY",  55555515, "M", "1 Pirate's Cove",   "Ruston",       "LA"],
                ["Talton J.",       19, "PSY",  55555516, "M", "666 Microsoft",     "Redmond",      "WA"],
                ["Teague L.",       18, "PSY",  55555517, "F", "Fern Gully Farm",   "Terry",        "LA"],
                ["Tucker T.",       45, "MGT",  55555518, "F", "Prop Wash Way",     "Eldorado",     "AR"],
                ["Walker J.",       23, "CS",   55555519, "M", "42 Ocean Drive",    "Venice",       "CA"],
                ["Walker R.",       21, "CS",   55555520, "M", "9 Iron Drive",      "Monroe",       "LA"]
            ]
        }
    }

    $scope.table = $scope.tables.Students;
}
