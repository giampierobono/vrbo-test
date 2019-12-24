"use strict";
const gulp = require("gulp");
const path = require("path");
const glob = require("glob");
const jeditor = require("gulp-json-editor");
const lernaConfig = require(path.join(__dirname, "..", "lerna.json"));

const dependencyTypes = ["optionalDependencies", "dependencies", "devDependencies", "peerDependencies"];

const packageJsons = lernaConfig.packages.map((packagePath) => path.join(packagePath, "package.json"));

const libraries = lernaConfig.packages
    .map((packagePath) => glob.sync(packagePath + path.sep))
    .reduce((acc, packagePaths) => acc.concat(packagePaths), []);

const packageJson = require(path.resolve(__dirname, "..", "package.json"));
const deps = Object.keys(packageJson.devDependencies);

const versionHarmonize = () =>
    gulp.src(packageJsons)
        .pipe(jeditor((json) => {
            dependencyTypes.forEach((dependencyType) => {
                const depList = json[dependencyType];
                if (!depList) {
                    return;
                }
                Object.keys(depList).forEach((packageName) => {
                    if (deps.indexOf(packageName) !== -1) {
                        json[dependencyType][packageName] = packageJson.devDependencies[packageName];
                    }

                    if (libraries.map((lib) => `@vrbo/${lib}`).indexOf(packageName) !== -1) {
                        json[dependencyType][packageName] = `^${packageJson.version}`;
                    }
                });
            });
            return json;
        }))
        .pipe(gulp.dest((file) => file.base, { overwrite: true }));

versionHarmonize.description = "Harmonize the versions of sub modules";

/**
 * Harmonize the versions of all modules deps to avoid versions mismatch
 */
gulp.task("versions-harmonize", versionHarmonize);

module.exports = gulp;
