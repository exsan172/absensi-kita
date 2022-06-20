const adminControllers = {
    login : async (req,res, next) => {
        res.render('pages/login.pages.ejs', { title: 'Masuk - Absensi Kita' });
    },

    register : async (req,res, next) => {
        res.render('pages/register.pages.ejs', { title: 'Daftar - Absensi Kita' });
    },

    registerEmploye : async (req,res, next) => {
        res.render('pages/register.employe.pages.ejs', { title: 'Daftar Karyawan - Absensi Kita' });
    },

    forgotPass : async (req,res, next) => {
        res.render('pages/forgot.password.pages.ejs', { title: 'Lupa password - Absensi Kita' });
    },

    dashboard : async (req,res, next) => {
        res.render('pages/dashboard.pages.ejs', { title: 'Dashboard - Absensi Kita' });
    },
}

module.exports = adminControllers