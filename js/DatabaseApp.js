angular.module('DatabaseApp', ['ui.bootstrap']);

var DatabaseController = function($scope){
    $scope.message = "This is a test";

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
            {link: "lt", name: "less than"},
            {link: "gt", name: "greater than"},
            {link: "eq", name: "equal to"}
        ];
    }

    $scope.getComparisonValues = function($scope){
        return [
            {link: "val1", name: "Value 1"},
            {link: "val2", name: "Value 2"},
            {link: "val3", name: "Value 3"}
        ];
    }
    
    $scope.table = {name: "Test",
        rows: [
            [1, 2, 3, 4, 5],
            [6, 7, 8, 9, 0],
            ['a', 'b', 'c', 'd', 'e'],
            ['f', 'g', 'h', 'i', 'j']
        ]
    }
}
