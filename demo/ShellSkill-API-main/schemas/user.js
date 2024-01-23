const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pfp: {
        type: String,
        required: true
    },      
    user_profile: {
        display_name: {
            type: String,
            required: true
        },
        pronouns: {
            type: String,
            default: null
        },
        about: {
            type: String,
            default: null
        },
        bio: {
            type: String,
            default: null
        },
        clickey_stuff: {
            type: [String],
            default: null
        },
        socials: {
            type: [String],
            default: null
        },
        profile_tags: {
            type: [String],
            default: null
        },
    },
    postables: {
        type: [{
            content_tags: [String],
            title: String,
            body: String,
            images: [String]
        }],
        default: null
    },
    creator_profile: {
        metadata: {
            is_active: {
                type: Boolean,
                default: false
            }
        },
        business_info: {
            kyc_type: {
                type: String,
                default: null
            },
            kyc_link: {
                type: String,
                default: null
            },
            kyc_address: {
                addr1: {
                    type: String,
                    default: null
                },
                addr2: {
                    type: String,
                    default: null
                },
                city: {
                    type: String,
                    default: null
                },
                province: {
                    type: String,
                    default: null
                },
                zip: {
                    type: String,
                    default: null
                },
                country: {
                    type: String,
                    default: null
                }
            },
            coordinates: {
                lat: {
                    type: Number,
                    default: null
                },
                long: {
                    type: Number,
                    default: null
                }
            },
            specialisations: {
                type: [String],
                default: null
            }
        },
        portfolio: {
            type: [Object],
            default: null
        },
        analytics: {
            type: Object,
            default: null
        }
    }
}, {
    versionKey: false,
    timestamps: true
});

exports.userModel = mongoose.model('user', userSchema, 'users');