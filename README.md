# validate_filename

Validate the file and folder names

## Install

```
npm install -g validate_filename
```

## Usage

```console
Usage: validate_filename <options> <file ...>

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
    validate_filename -e '^[a-z0-9_./]+$' -m 'Use snake_case for file and folder names' test.html UPPERCASE.html path/to/test-file.css images/logo.png
    ```

- use `ls` command

    ```
    validate_filename -e '^[a-z0-9_./]+$' -m 'Use snake_case for file and folder names' $(ls)
    ```