module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '50661ff7bf5f8242de1d9605439a24e6'),
  },
});
