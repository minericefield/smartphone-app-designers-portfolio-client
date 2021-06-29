# Components Designing Rule

|  Category  |  Description  | Can initialize provider | Can read provider | Can write provider | Can have local states |
| ---- | ---- | --- | --- | --- | --- |
| App.vue | Root Component | ◯ | ◯ | ◯ | ◯ |
| Views | Pages | △ | ◯ | ◯ | ◯ |
| Templates | Can occupy the entire screen and could be a route children | × | ◯ | ◯ | ◯ |
| Components | UI parts | × | △ | × | △ |
