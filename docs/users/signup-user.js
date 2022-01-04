module.exports = {
    post: {
        tags: ['Users'],
        description: 'signup user',
        operationId: 'signupUser',
        parameters: [],
        requestBody: {
            description: 'properties for signup',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            email: {
                                type: 'string',
                                description: 'email пользователя',
                                example: 'vasya@gmail.com',
                            },
                            password: {
                                type: 'string',
                                minLength: 3,
                                maxLength: 30,
                                description: 'пароль пользователя',
                                example: '123456',
                            },
                            firstName: {
                                type: 'string',
                                description: 'Имя пользователя',
                                example: 'Вася',
                            },
                            lastName: {
                                type: 'string',
                                description: 'Фамилия пользователя',
                                example: 'Пупкин',
                            },
                        },
                        required: ['email', 'password'],
                    },
                },
            },
        },
        responses: {
            200: {
                description: 'get tokens',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Token',
                        },
                    },
                },
            },
        },
    },
};
