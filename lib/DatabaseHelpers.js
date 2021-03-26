import fs from 'fs';

export const writeToDb = (database, databaseFile = 'db.json') => {
    fs.writeFile(databaseFile, JSON.stringify(databse, null, 2), (error) => {
        if (error) console.error(error.message);
    });
};

export const loadFromDb = (databaseFile = 'db.json') => {
    fs.readFileSync(databaseFile);
    return JSON.parse(database);
}; 

