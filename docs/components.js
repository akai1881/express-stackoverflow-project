module.exports = {
    components: {
        schemas: {
            User: {
                type: 'object',
                properties: {
                    id: {
                        type: 'number',
                        description: 'Уникальный id пользователя',
                        example: '1',
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
                    email: {
                        type: 'string',
                        description: 'email пользователя',
                        example: 'vasya@gmail.com',
                    },
                    password: {
                        type: 'string',
                        description: 'пароль пользователя',
                        example: '123456',
                    },
                },
            },
            Problem: {
                type: 'object',
                properties: {
                    id: {
                        type: 'number',
                        example: '1',
                    },
                    title: {
                        type: 'string',
                    },
                    description: {
                        type: 'string',
                    },
                    tag: {
                        type: 'string',
                        example: 'Java',
                        description: 'Tag is enum, allowed only (Java, Javascript, Python, Kotlin))',
                    },
                    replies: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/Reply',
                        },
                    },
                    pictures: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                id: {
                                    type: 'number',
                                    description: 'picture id',
                                    example: 1,
                                },
                                image: {
                                    type: 'string',
                                    descirption: 'name of the image',
                                    example: '83a7892c-0825-41d3-aa14-dea6cd633f0c.jpeg',
                                },
                            },
                        },
                    },
                },
            },
            Reply: {
                type: 'object',
                properties: {
                    userId: {
                        type: 'number',
                        description: 'author of reply',
                        example: 1,
                    },
                    problemId: {
                        type: 'number',
                        description: 'id of related problem',
                        example: 1,
                    },
                    text: {
                        type: 'string',
                        description: 'body of reply',
                        example: 'this is reply to problem',
                    },
                },
            },
            Token: {
                type: 'object',
                properties: {
                    accessToken: {
                        type: 'string',
                        descirption: 'this is access token',
                        example:
                            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
                    },
                    refreshToken: {
                        type: 'string',
                        descirption: 'this is refresh token',
                        example:
                            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
                    },
                },
            },
        },
    },
};
