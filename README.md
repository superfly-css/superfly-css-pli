# SuperflyCSS Project Layout Instance

The PLI (Project Layout Instance) is a javascript object model of the standard directory layout that all [SuperflyCSS](https://github.com/superfly-css/superfly-css/) modules use.  The standard layout enables users to instantly feel at home in any one of the [SuperflyCSS](https://github.com/superfly-css/superfly-css/) modules.

The PLI is inspired by the [Apache Maven Standard Directory Layout](https://maven.apache.org/guides/introduction/introduction-to-the-standard-directory-layout.html).

## Directory Descriptions

The following directories are modeled by the PLI.

### Source Directories

| Directory        | Summary                                                   |
|:-----------------|:----------------------------------------------------------|
| src/main/css     | Entry level CSS module(s) are contained in this directory |
| src/main/js      | Javascript that support dynamic demoes                    |
| src/main/html    | Dynamic demonstrations                                    |
| src/test/css     | CSS visual unit tests                                     |
| src/test/js      | Javascript supporting CSS unit tests                      |
| src/test/html    | Html pages for loading the unit tests                     |

### Target Directories

| target/main/css  | Built CSS modules                                         |
| target/main/js   | Built javascript                                          |
| target/main/html | Built dynamic demo html pages                             |
| target/test/css  | Built test CSS                                            |
| target/test/js   | Built test Javascript                                     |
| target/test/html | Built test html                                           |

More directories can easily be added, and will naturally fit with the build methodology.  Examples:

| Directory            | Summary        |
|:---------------------|:---------------|
| src/main/coffescript | Coffescript    |
| src/main/jade        | Jade templates |
