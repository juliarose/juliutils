# Changelog

## [1.2.0] - 2024-06-04

### Added
- "average" method which replaces "arrAverage".
- "mean" method, which is an alias for "average".
- "shallowFlatten" method.

### Changed
- Better JSDoc and types.
- "flattenCompact" method now flattens only recursively.
- "flatten" method now flattens only recursively.
- "printCSV" method now uses YYYY/mm/dd format for dates.

### Fixed
- "range" method not working with negative numbers or reverse ranges.
- "printCSV" method using "tostring" instead of "toString" probably causing an error.

## [1.1.3] - 2021-10-27

### Changed
- "flatten" method has improved performance.

### Fixed
- Some notes.

## [1.1.1] - 2020-05-01

### Fixed
- "chainSort" method requiring boolean return values in index.d.ts.

## [1.1.0] - 2020-05-01

### Fixed
- index.d.ts file.

## [1.0.9] - 2020-05-01

### Fixed
- "basicPlural" method using any rather than number in index.d.ts.

### Fixed
- "uniq" method requiring 2 arguments in index.d.ts.

## [1.0.8] - 2020-05-01

### Added
- "basicPlural" method in index.d.ts.

## [1.0.7] - 2020-02-18

### Fixed
- "deepClone" method creating empty objects from dates.

### Changed
- "pickKeys" and "pluck" method can now take any number of arguments.
- "deepClone" method now clones more than just primitive types. It's more deep.

### Added
- Typescript .d.ts file.
- "yay" alias for "yes".
- "nay" alias for "no".

## [1.0.6] - 2020-01-04

### Added
- "closest" method.
- "chainSort" method.

## [1.0.5] - 2019-12-31

### Added
- filter parameter to "uniq" method.

## [1.0.4] - 2019-12-23

### Added
- "roundN" method.

### Fixed
- An issue with the "shorten" method.

## [1.0.2] - 2019-12-13

### Added
- This changelog file.
- "deepEqual" method.
- "without" method.
