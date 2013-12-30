/**
 * @fileoverview Tests for func-style rule.
 * @author Nicholas C. Zakas
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var eslintTester = require("../../../lib/tests/eslintTester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

eslintTester.addRuleTest("func-style", {
    valid: [
    	{
    		code: "function foo(){}\n function bar(){}",
    		args: [1, "declaration"]
    	},
        {
            code: "foo.bar = function(){};",
            args: [1, "declaration"]
        },
        {
            code: "foo.bar = function(){};",
            args: [1, "expression"]
        },
		{
    		code: "var foo = function(){};\n var bar = function(){};",
    		args: [1, "expression"]
    	},                
    ],

    invalid: [
        {
            code: "var foo = function(){};",
            args: [1, "declaration"],
            errors: [
                {
                    message: "Expected a function declaration.",
                    type: "VariableDeclarator"
                }
            ]
        },
        {
            code: "function foo(){}",
            args: [1, "expression"],
            errors: [
                {
                    message: "Expected a function expression.",
                    type: "FunctionDeclaration"
                }
            ]
        }
    ]
});
