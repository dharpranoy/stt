# ShellSkill REST API documentation

## API v1
Use prefix `/v1/...`
- Authentication:
  - **POST** `/auth/google`
  
- Authorisation:
  - **GET** `/auth/google/token`

    For generating new refresh tokens via google-auth-library
  
- Profile:
  - **GET** `/profile/whoami`

    Get shortened self profile data (includes name, email, uid, pfp_cdn_link)

  - **GET** `/profile`

    Get self profile data

  - **GET** `/profile/:id`
    
    Get user profile data with UID `id`

  - **PUT** `/profile/:id`
    
    Patch user profile (for users with elevated permissions only viz. profile admins/owners, moderation board)

  - **POST** `/profile/:id`

    Create new user profile (this operation must accompany user registration by default)

  - **DELETE** `/profile/:id`
  
    Deregister user profile (for users with elevated permissions only viz. profile admins/owners, moderation board)

- Gig:
  - **POST** `/post/gig`

    Create a gig posting

  - **GET** `/post/gig`

    Get all gig postings

- Search:
  - **GET** `/search`
    
    Query for matching creator profiles within a given georadius and profile tags

- Messaging:
  - **GET** `/messaging/prefetch`

    Query for conversation history prefetch data while loading messaging interface

  - **GET** `/messaging/conv?recipient={UID}&last={NUM}`

    Query for the last `{NUM}` messages (if any) with room ID pair `{SELF_UID, RECIPIENT_UID}`

- Creator
  - **POST** `/creator/register`
  
    Append creator details to consumer profile object and unlock analytics

- Utility
  - **GET** `/util/geocoding`

    Get geocoded coordinates corresponding to the global address