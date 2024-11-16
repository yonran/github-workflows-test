import { CodegenConfig } from '@graphql-codegen/cli';
import { schema } from '@octokit/graphql-schema';

const config: CodegenConfig = {
    schema: schema.idl,
    documents: ['src/**/*.ts'],
    // emit esm-compatible import ./types.js instead of ./types
    emitLegacyCommonJSImports: false,
    generates: {
        './src/generated/': {
            preset: 'client',
        },
    },
};

export default config;
