/*      http://eslint.org/docs/developer-guide/working-with-rules
The ESlint rules live in the lib/rules folder in the ESLint Project     */

//Let's check for the 'no-console' rule
        $nvim node_modules/eslint/lib/rules/no-console.js
/* we can see that this file exports an object with a meta property and a create method
   meta property contains two properties : the docs object and the schema array */

The docs object contains a description and a category for documentation purposes
and 'recommended' field which determines whether this is a part of the eslint:recommended ruleset
        meta: {
                docs: {
                    description: "disallow the use of `console`",
                    category: "Possible Errors",
                    recommended: true
                },


The schema property allows you to enforce what params are being passed as part of the rule deffinition
        schema: [
                    {
                        type: "object",
                        properties: {
                            allow: {
                                type: "array",
                                items: {
                                    type: "string"
                                },
                                minItems: 1,
                                uniqueItems: true
                            }
                        },
                        additionalProperties: false
                    }
                ]
                
                
//Let's look at the create(..) method which is the most important
     create(context) {
            const options = context.options[0] || {};
            const allowed = options.allow || [];

            function isConsole(reference) {
                const id = reference.identifier;

                return id && id.name === "console";
            }
                
                function isMemberAccessExceptAllowed(reference) {
            const node = reference.identifier;
            const parent = node.parent;

            return (
                parent.type === "MemberExpression" &&
                parent.object === node &&
                !isAllowed(parent)
            );
        }

        function report(reference) {
            const node = reference.identifier.parent;

            context.report({
                node,
                loc: node.loc,
                message: "Unexpected console statement."
            });
        }

        return {
            "Program:exit"() {
                const scope = context.getScope();
                const consoleVar = astUtils.getVariableByName(scope, "console");
                const shadowed = consoleVar && consoleVar.defs.length > 0;

    
                const references = consoleVar
                    ? consoleVar.references
                    : scope.through.filter(isConsole);

                if (!shadowed) {
                    references
                        .filter(isMemberAccessExceptAllowed)
                        .forEach(report);
                }
            }
        };
    }
};
