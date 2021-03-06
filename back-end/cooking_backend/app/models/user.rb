class User < ApplicationRecord
    has_secure_password
    has_many :recipes
    validates :username, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
end
