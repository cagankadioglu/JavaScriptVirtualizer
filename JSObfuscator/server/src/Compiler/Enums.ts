export enum OpCode  {
    LOAD_INT,
    LOAD_F64,
    LOAD_STR,
    LOAD_BOOL,
    LOAD_SCOPE_DATA,
    MOVE_REG,
    ADD,
    SUB,
    MUL,
    LESS_OR_EQUAL,
    GREATER_OR_EQUAL,
    EQUAL_STRICT,
    EQUAL,
    NOT_EQUAL,
    DIVIDE,
    LESS,
    MORE,
    BIT_SHIFT_LEFT,
    BIT_SHIFT_RIGHT,
    BIT_SHIFT_RIGHT_ZERO_FILL,
    MODULO,
    BIT_AND,
    INSTANCE_OF,
    IN,
    BIT_XOR,
    NOT_EQUAL_STRICT,
    TERMINATE,
    LOAD_VAR,
    ASSIGN_VAR,
    ASSIGN_VAR_PIPE,
    ASSIGN_VAR_BITWISE_AND,
    ASSIGN_VAR_BITSHIFT_LEFT,
    ASSIGN_VAR_PLUS,
    ASSIGN_VAR_MINUS,
    DECLARE,
    REG_STR,
    LOAD_GLOBAL,
    LOAD_GLOBAL_SCOPE,
    LOAD_PROP,
    MOV_REG_STACK,
    CALL,
    NEW_CALL,
    PROP_CALL,
    CREATE_FUNC,
    JMP,
    TRY,
    LEAVE_TRY,
    RETURN,
    SELF_FN_REF,
    JMP_FALSE,
    JMP_TRUE,
    MOV_ARG_TO_VAR,
    REG_SCOPE_PARENTS,
    PLUS_PLUS,
    MINUS_MINUS,
    THIS,
    ASSIGN_PROP,
    ASSIGN_PROP_PLUS,
    ASSIGN_PROP_MINUS,
    UNARY_NOT,
    UNARY_INVERT,
    UNARY_NEGATE,
    UNARY_TYPEOF,
    ARGUMENTS_REF,
    LOAD_ARRAY,
    LOAD_OBJECT,
    LOAD_NULL,
    LOAD_UNDEFINED,
    THROW,
    OBJECT_PLUS_PLUS,
    OBJECT_MINUS_MINUS,
    MOV_ERR_TO_VAR,
    UNARY_VOID,
    PIPE,
    LOAD_REGEX,
    ASSIGN_PROPERTY_ZERO_RIGHT_SHIFT_FILL,
    ASSIGN_PROPERTY_PIPE,
    ASSIGN_PROPERTY_MUL,
    ASSIGN_VAR_ZERO_RIGHT_SHIFT_FILL,
    UNARY_DELETE,
    UNARY_DELETE_MEMBER_EXPRESSION,
    ASSIGN_VAR_XOR,
    ASSIGN_VAR_REMAINDER,
    UNARY_PLUS,
    ASSIGN_PROPERTY_XOR,
    ASSIGN_PROPERTY_BIT_AND,
    ASSIGN_VAR_MUL,
    ASSIGN_VAR_DIV,
    ASSIGN_PROPERTY_DIV,
};