# validate_filename

Validate the file and folder names

## Install

```
npm install
```

## Usage

```console
Usage: node node_modules/validate_filename/index.js <options> [file ...]

validate the file and folder names

Options:

-h, --help               output usage information
-V, --version            output the version number
-e, --pattern <pattern>  a string that specifies the pattern of the regular expression
-m, --message <message>  output errors when invalid

```

## Demo

- check one or more paths

    ```
    node node_modules/validate_filename/index.js -e '^[a-z0-9_./]+$' -m 'Use snake_case for file and folder names' test.html UPPERCASE.html path/to/test-file.css images/logo.png
    ```

- use `ls` command

    ```
    node node_modules/validate_filename/index.js -e '^[a-z0-9_./]+$' -m 'Use snake_case for file and folder names' $(ls)
    ```