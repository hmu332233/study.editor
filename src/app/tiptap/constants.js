export const defaultContents = {
    "type": "doc",
    "content": [
        {
            "type": "heading",
            "attrs": {
                "level": 1
            },
            "content": [
                {
                    "type": "text",
                    "text": "H1 (#)"
                }
            ]
        },
        {
            "type": "heading",
            "attrs": {
                "level": 2
            },
            "content": [
                {
                    "type": "text",
                    "text": "H2 (##)"
                }
            ]
        },
        {
            "type": "heading",
            "attrs": {
                "level": 3
            },
            "content": [
                {
                    "type": "text",
                    "text": "H3 (###)"
                }
            ]
        },
        {
            "type": "heading",
            "attrs": {
                "level": 4
            },
            "content": [
                {
                    "type": "text",
                    "text": "H4 (####)"
                }
            ]
        },
        {
            "type": "heading",
            "attrs": {
                "level": 5
            },
            "content": [
                {
                    "type": "text",
                    "text": "H5 (#####)"
                }
            ]
        },
        {
            "type": "paragraph"
        },
        {
            "type": "bulletList",
            "content": [
                {
                    "type": "listItem",
                    "attrs": {
                        "color": null
                    },
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Bullet list item1"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "listItem",
                    "attrs": {
                        "color": null
                    },
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Bullet list item2"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "type": "paragraph"
        },
        {
            "type": "orderedList",
            "attrs": {
                "start": 1
            },
            "content": [
                {
                    "type": "listItem",
                    "attrs": {
                        "color": null
                    },
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Ordered List item1"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "listItem",
                    "attrs": {
                        "color": null
                    },
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "type": "text",
                                    "text": "Ordered List item2"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "type": "paragraph"
        },
        {
            "type": "paragraph",
            "content": [
                {
                    "type": "text",
                    "text": "이것은 한국어입니다"
                }
            ]
        },
        {
            "type": "paragraph",
            "content": [
                {
                    "type": "text",
                    "text": "이것은 "
                },
                {
                    "type": "text",
                    "marks": [
                        {
                            "type": "bold"
                        }
                    ],
                    "text": "Bold"
                },
                {
                    "type": "text",
                    "text": "입니다"
                }
            ]
        },
        {
            "type": "paragraph",
            "content": [
                {
                    "type": "text",
                    "text": "이것은 "
                },
                {
                    "type": "text",
                    "marks": [
                        {
                            "type": "italic"
                        }
                    ],
                    "text": "Italic"
                },
                {
                    "type": "text",
                    "text": "입니다"
                }
            ]
        },
        {
            "type": "paragraph",
            "content": [
                {
                    "type": "text",
                    "text": "이것은 "
                },
                {
                    "type": "text",
                    "marks": [
                        {
                            "type": "strike"
                        }
                    ],
                    "text": "Strike"
                },
                {
                    "type": "text",
                    "text": "입니다"
                }
            ]
        },
        {
            "type": "paragraph",
            "content": [
                {
                    "type": "text",
                    "text": "이것은 "
                },
                {
                    "type": "text",
                    "marks": [
                        {
                            "type": "link",
                            "attrs": {
                                "href": "https://q-link.minung.dev/ko",
                                "target": "_blank",
                                "class": "link"
                            }
                        }
                    ],
                    "text": "링크"
                },
                {
                    "type": "text",
                    "text": "입니다"
                }
            ]
        },
        {
            "type": "paragraph",
            "content": [
                {
                    "type": "text",
                    "text": "아래는 Horizontal Rule입니다"
                }
            ]
        },
        {
            "type": "horizontalRule"
        },
        {
            "type": "paragraph",
            "content": [
                {
                    "type": "text",
                    "text": "아래는 Code Block 입니다. 하이라이팅 기능 지원합니다"
                }
            ]
        },
        {
            "type": "codeBlock",
            "attrs": {
                "language": "css"
            },
            "content": [
                {
                    "type": "text",
                    "text": "body {\n  display: none;\n}"
                }
            ]
        },
        {
            "type": "paragraph"
        },
        {
            "type": "paragraph",
            "content": [
                {
                    "type": "text",
                    "text": "I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too."
                }
            ]
        },
        {
            "type": "blockquote",
            "content": [
                {
                    "type": "paragraph",
                    "content": [
                        {
                            "type": "text",
                            "text": "Wow, that’s amazing. Good work, boy! 👏 "
                        },
                        {
                            "type": "hardBreak"
                        },
                        {
                            "type": "text",
                            "text": "— Mom"
                        }
                    ]
                }
            ]
        },
        {
            "type": "paragraph"
        },
        {
            "type": "paragraph",
            "content": [
                {
                    "type": "text",
                    "marks": [
                        {
                            "type": "textStyle",
                            "attrs": {
                                "color": "#958DF1"
                            }
                        }
                    ],
                    "text": "색상도 변경됩니다"
                }
            ]
        }
    ]
}