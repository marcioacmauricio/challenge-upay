Entitys = {
    "MasterModelTable": {
        "access_type": 2,
        "col_description_name": "id",
        "col_description_type": 1,
        "col_label_name": "id",
        "col_label_type": 1,
        "col_value_name": "id",
        "col_value_type": 1,
        "description": "Tabela Modelo",
        "id": 14,
        "id_schema": 2,
        "id_secondary_table": "",
        "id_table": 0,
        "id_table_type": 1,
        "is_recursive": 0,
        "level": 1,
        "nickname": "model_table",
        "ordering": 1,
        "title": "Tabela Modelo",
        "EntityPredesc": "",
        "schema_nickname": "master"
    },
    "MasterUser": {
        "access_type": 2,
        "col_description_name": "id",
        "col_description_type": 1,
        "col_label_name": "id",
        "col_label_type": 1,
        "col_value_name": "id",
        "col_value_type": 1,
        "description": "User",
        "id": 15,
        "id_schema": 2,
        "id_secondary_table": "",
        "id_table": 0,
        "id_table_type": 1,
        "is_recursive": 0,
        "level": 1,
        "nickname": "user",
        "ordering": 2,
        "title": "User",
        "EntityPredesc": "",
        "schema_nickname": "master"
    },
    "MasterAddress": {
        "access_type": 2,
        "col_description_name": "last_name",
        "col_description_type": 5,
        "col_label_name": "first_name",
        "col_label_type": 5,
        "col_value_name": "id",
        "col_value_type": 1,
        "description": "Address",
        "id": 20,
        "id_schema": 2,
        "id_secondary_table": "",
        "id_table": 15,
        "id_table_type": 1,
        "is_recursive": 0,
        "level": 2,
        "nickname": "address",
        "ordering": 3,
        "title": "Address",
        "EntityPredesc": "MasterUser",
        "schema_nickname": "master"
    },
    "MasterTablePermission": {
        "access_type": 3,
        "col_description_name": "id",
        "col_description_type": 1,
        "col_label_name": "id",
        "col_label_type": 1,
        "col_value_name": "id",
        "col_value_type": 1,
        "description": "Table permission",
        "id": 16,
        "id_schema": 2,
        "id_secondary_table": "",
        "id_table": 0,
        "id_table_type": 1,
        "is_recursive": 0,
        "level": 1,
        "nickname": "table_permission",
        "ordering": 4,
        "title": "Table permission",
        "EntityPredesc": "",
        "schema_nickname": "master"
    },
    "MasterColumnPermission": {
        "access_type": 3,
        "col_description_name": "id",
        "col_description_type": 1,
        "col_label_name": "id",
        "col_label_type": 1,
        "col_value_name": "id",
        "col_value_type": 1,
        "description": "Column permission",
        "id": 21,
        "id_schema": 2,
        "id_secondary_table": "",
        "id_table": 14,
        "id_table_type": 1,
        "is_recursive": 0,
        "level": 2,
        "nickname": "column_permission",
        "ordering": 5,
        "title": "Column permission",
        "EntityPredesc": "MasterModelTable",
        "schema_nickname": "master"
    },
    "MasterMailConfirmation": {
        "access_type": 3,
        "col_description_name": "id",
        "col_description_type": 1,
        "col_label_name": "id",
        "col_label_type": 1,
        "col_value_name": "id",
        "col_value_type": 1,
        "description": "Mail confirmation",
        "id": 23,
        "id_schema": 2,
        "id_secondary_table": "",
        "id_table": 15,
        "id_table_type": 1,
        "is_recursive": 0,
        "level": 2,
        "nickname": "mail_confirmation",
        "ordering": 6,
        "title": "Mail confirmation",
        "EntityPredesc": "MasterUser",
        "schema_nickname": "master"
    },
    "MasterMailTemplate": {
        "access_type": 3,
        "col_description_name": "title",
        "col_description_type": 5,
        "col_label_name": "title",
        "col_label_type": 5,
        "col_value_name": "id",
        "col_value_type": 1,
        "description": "Mail template",
        "id": 17,
        "id_schema": 2,
        "id_secondary_table": "",
        "id_table": 0,
        "id_table_type": 1,
        "is_recursive": 0,
        "level": 1,
        "nickname": "mail_template",
        "ordering": 7,
        "title": "Mail template",
        "EntityPredesc": "",
        "schema_nickname": "master"
    },
    "MasterPasswordRecovery": {
        "access_type": 3,
        "col_description_name": "id",
        "col_description_type": 1,
        "col_label_name": "id",
        "col_label_type": 1,
        "col_value_name": "id",
        "col_value_type": 1,
        "description": "Password recovery",
        "id": 22,
        "id_schema": 2,
        "id_secondary_table": "",
        "id_table": 15,
        "id_table_type": 1,
        "is_recursive": 0,
        "level": 2,
        "nickname": "password_recovery",
        "ordering": 8,
        "title": "Password recovery",
        "EntityPredesc": "MasterUser",
        "schema_nickname": "master"
    },
    "MasterResource": {
        "access_type": 3,
        "col_description_name": "description",
        "col_description_type": 5,
        "col_label_name": "title",
        "col_label_type": 5,
        "col_value_name": "id",
        "col_value_type": 1,
        "description": "Resource",
        "id": 18,
        "id_schema": 2,
        "id_secondary_table": "",
        "id_table": 0,
        "id_table_type": 1,
        "is_recursive": 0,
        "level": 1,
        "nickname": "resource",
        "ordering": 9,
        "title": "Resource",
        "EntityPredesc": "",
        "schema_nickname": "master"
    },
    "MasterUserGroup": {
        "access_type": 3,
        "col_description_name": "description",
        "col_description_type": 5,
        "col_label_name": "title",
        "col_label_type": 5,
        "col_value_name": "id",
        "col_value_type": 1,
        "description": "User group",
        "id": 19,
        "id_schema": 2,
        "id_secondary_table": "",
        "id_table": 0,
        "id_table_type": 1,
        "is_recursive": 0,
        "level": 1,
        "nickname": "user_group",
        "ordering": 11,
        "title": "User group",
        "EntityPredesc": "",
        "schema_nickname": "master"
    },
    "MasterUserGroupResource": {
        "access_type": 3,
        "col_description_name": "id",
        "col_description_type": 1,
        "col_label_name": "id",
        "col_label_type": 1,
        "col_value_name": "id",
        "col_value_type": 1,
        "description": "User group resource",
        "id": 24,
        "id_schema": 2,
        "id_secondary_table": "",
        "id_table": 19,
        "id_table_type": 1,
        "is_recursive": 0,
        "level": 2,
        "nickname": "user_group_resource",
        "ordering": 12,
        "title": "User group resource",
        "EntityPredesc": "MasterUserGroup",
        "schema_nickname": "master"
    },
    "MasterUserUserGroup": {
        "access_type": 3,
        "col_description_name": "id",
        "col_description_type": 1,
        "col_label_name": "id",
        "col_label_type": 1,
        "col_value_name": "id",
        "col_value_type": 1,
        "description": "User user group",
        "id": 25,
        "id_schema": 2,
        "id_secondary_table": "",
        "id_table": 15,
        "id_table_type": 1,
        "is_recursive": 0,
        "level": 2,
        "nickname": "user_user_group",
        "ordering": 13,
        "title": "User user group",
        "EntityPredesc": "MasterUser",
        "schema_nickname": "master"
    }
}