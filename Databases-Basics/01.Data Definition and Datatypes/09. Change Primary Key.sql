ALTER TABLE Users
DROP CONSTRAINT PK__Users__3214EC07FE3D6ED9

ALTER TABLE Users
ADD CONSTRAINT PK_Users PRIMARY KEY (Id, Username)