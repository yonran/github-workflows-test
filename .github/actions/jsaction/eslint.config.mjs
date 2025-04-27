import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
export default tseslint.config(
    js.configs.recommended,
    importPlugin.flatConfigs.recommended,
    importPlugin.flatConfigs.typescript,
    // eslint-disable-next-line import/no-named-as-default-member
    ...tseslint.configs.strictTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                allowDefaultProject: ['codegen.ts'],
                projectService: true,
                tsconfigDirName: import.meta.dirname,
            },
        },
        settings: {
            'import/resolver': {
                typescript: true,
                node: true,
            },
        },
        rules: {
            // disallow unused variables, except when they start with _
            // see example config in
            // https://typescript-eslint.io/rules/no-unused-vars/#benefits-over-typescript
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    args: 'all',
                    argsIgnorePattern: '^_',
                    caughtErrors: 'all',
                    caughtErrorsIgnorePattern: '^_',
                    destructuredArrayIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                },
            ],
            '@typescript-eslint/consistent-type-imports': 'error',
            'import/order': 'error',
        },
    },
    {
        files: ['**/*.mjs'],
        // eslint-disable-next-line import/no-named-as-default-member
        ...tseslint.configs.disableTypeChecked,
    },
    {
        ignores: ['dist/**'],
    },
);
