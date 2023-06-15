const db = require('../config/config');
const bcrypt = require('bcryptjs');

const User = {};

User.create = async (user, result) => {

    const hash = await bcrypt.hash(user.password, 10);

    const sql = `
        INSERT INTO
            users(
                usuario,
                rol,
                password
            )
        VALUES(?, ?, ?)
    `;

    db.query
        (
            sql,
            [
                user.usuario,
                user.rol,
                hash
            ],
            (err, res) => {
                if (err) {
                    console.log('Error:', err);
                    result(err, null);
                }
                else {
                    console.log('Id del nuevo usuario:', res.insertId);
                    result(null, res.insertId);
                }
            }
        )

}

User.findById = (id, result) => {

    const sql = `
    SELECT
        U.id,
        U.usuario,
        U.rol,
        U.password
    FROM
        users U
    WHERE
        id = ?
    GROUP BY
        U.id
    `;

    db.query(
        sql,
        [id],
        (err, user) => {
            if (err) {
                console.log('Error:', err);
                result(err, null);
            }
            else {
                console.log('Usuario obtenido:', user[0]);
                result(null, user[0]);
            }
        }
    )

}

User.findByUser = (usuario, result) => {

    const sql = `
    SELECT
        U.id,
        U.usuario,
        U.rol,
        U.password
    FROM
        users U
    WHERE
        usuario = ?
    GROUP BY
        U.id
    `;

    db.query(
        sql,
        [usuario],
        (err, user) => {
            if (err) {
                console.log('Error:', err);
                result(err, null);
            }
            else {
                console.log('Usuario obtenido:', user[0]);
                result(null, user[0]);
            }
        }
    )

}

module.exports = User;