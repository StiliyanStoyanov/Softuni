CREATE TABLE Minions(
	Id INT NOT NULL,
	[Name] NVARCHAR(50),
	Age INT,
	CONSTRAINT PK_Minions PRIMARY KEY (Id)
)

CREATE TABLE Towns(
	Id INT NOT NULL,
	[Name] NVARCHAR(50),
	CONSTRAINT PK_Towns PRIMARY KEY (Id)
)