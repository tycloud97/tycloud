---
sidebar_position: 3
---

# AWS Cognito

## Pros:

- Fully managed service.

- Native integration with API Gateway.

- Integration available with ALB ingress controller or via SDKs at application level.

- Support for SAML/OIDC federated login.

- Support for Secure Remote Password Protocol.

- OAUTH2 support. [[Reference](https://aws.amazon.com/blogs/mobile/understanding-amazon-cognito-user-pool-oauth-2-0-grants/ "https://aws.amazon.com/blogs/mobile/understanding-amazon-cognito-user-pool-oauth-2-0-grants/")]

- JWT support. [[Reference](https://docs.aws.amazon.com/cognito/latest/developerguide/authentication.html "https://docs.aws.amazon.com/cognito/latest/developerguide/authentication.html")]

- Extensive reference architectures/comprehensive blog posts/documentation available.

- HIPAA/BAA/PCI/SOC/ISO27001 compliant.

- Advanced security features[compromised credential protection/risk-based adaptive authentication/MFA. [Reference](https://aws.amazon.com/blogs/security/how-to-use-new-advanced-security-features-for-amazon-cognito-user-pools/ "https://aws.amazon.com/blogs/security/how-to-use-new-advanced-security-features-for-amazon-cognito-user-pools/")]

- Extensible due to lambda functions available at every User Pool workflow interaction. [[Reference](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html "https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html")]

## Cons:

- Pricing can become a pain-point around Cognito. More details at [Pricing](https://aws.amazon.com/cognito/pricing/ "https://aws.amazon.com/cognito/pricing/") , and [advanced security features](https://aws.amazon.com/blogs/security/how-to-use-new-advanced-security-features-for-amazon-cognito-user-pools/ "https://aws.amazon.com/blogs/security/how-to-use-new-advanced-security-features-for-amazon-cognito-user-pools/")

- Difficult to make multi-region aware/migrate away as due to compliance requirements we cannot extract the password. (Is also a security advantage.)