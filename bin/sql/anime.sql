CREATE TABLE animes(
    id serial,
    title character varying(500),
    cover character varying(500),
    synopsis character varying(500),
    numSeasons int
);

CREATE TABLE seasons(
    id serial,
    title character varying(500),
    seasonNum int,
    numEpisodes int
);

CREATE TABLE episodes(
    id serial,
    title character varying(500),
    enumber int,
    plot character varying(500)
);

CREATE TABLE series(
    anime character varying(500),
    season character varying(500)
);

CREATE TABLE episodesinseasons(
    season character varying(500),
    episode character varying(500)
);

INSERT INTO animes(title, cover, synopsis, numSeasons)
VALUES
('Sword Art Online','https://m.media-amazon.com/images/M/MV5BNTIzMzkzMzEtMjU5OC00NTUzLTkxOGItMGU1NTdjZTE0YjE1XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg','In the year 2022, thousands of people get trapped in a new virtual MMORPG and the lone wolf player, Kirito, works to escape.', 3),
('Gargantia','https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Gargantia_anime_promo_image.jpg/230px-Gargantia_anime_promo_image.jpg','While fighting an intense inter-galactic war, a mecha pilot was accidentally warped into a space-time neither he nor the computer of his mecha could recognize.', 1),
('Fate stay night','http://www.gstatic.com/tv/thumb/tvbanners/12437284/p12437284_b_v8_aa.jpg','A group of seven mages gets chosen to become masters of seven classes of heroic spirits, in order to fight and win the Holy Grail.', 2);

INSERT INTO seasons(title, seasonNum, numEpisodes)
VALUES
('Sword Art Online 1', 1 , 25),
('Sword Art Online 2', 2 , 24),
('Sword Art Online 3', 3 , 24),
('Gargantia', 1 , 15),
('unlimited blade works 1', 1 , 12),
('unlimited blade works 2', 2 , 14);

INSERT INTO episodes(title, enumber, plot)
VALUES
('The World of Swords',1,'In the near future, a virtual reality game called Sword Art Online has been released where players control their avatars with their bodies. One day players discover they cannot log out, as the game creator is holding them captive unless they defeat the final boss. However, if they die in the game, they die in real life. Their struggle for survival starts now.'),
('Castaway',1,'Ensign Ledo and his Machine Caliber Chamber K6821, join the latest attack against the Hideauze. The attack eventually ends in failure and a retreat order is issued by Ledos superior, Kugel. '),
('Prologue',0,'Young Mage Rin Tosaka unleashes the legendary archer to battle her classmates warrior servants for the Holy Grail, but someone is not playing fair.');

INSERT INTO series(anime, season)
VALUES
('Sword Art Online','Sword Art Online 1'),
('Sword Art Online','Sword Art Online 2'),
('Sword Art Online','Sword Art Online 3'),
('Gargantia','Gargantia'),
('Fate stay night', 'unlimited blade works 1'),
('Fate stay night', 'unlimited blade works 2');

INSERT INTO episodesinseasons(season, episode)
VALUES
('Sword Art Online 1','The World of Swords'),
('Gargantia','Castaway'),
('unlimited blade works 1','Prologue');
