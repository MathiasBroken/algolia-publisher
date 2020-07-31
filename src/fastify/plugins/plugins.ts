import FPlugin from "fastify-plugin";
import Swagger from "fastify-swagger";
import FCors from "fastify-cors";
import FSensible from "fastify-sensible";

const corsOpts = {
  origin: "*",
  credentials: true,
  methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
};

const swaggerOpts = {
  routePrefix: "/",
  exposeRoute: true,
  swagger: {
    info: {
      title: "Alogolia Publisher API",
      version: "1.0.0",
    },
    schemes: ["https", "http"],
    consumes: ["application/json"],
    produces: ["application/json"],
  },
};

function plugin(fastify, opts, next) {
  fastify.register(FSensible).register(FCors, corsOpts).register(Swagger, swaggerOpts);
  next();
}

module.exports = FPlugin(plugin, {});
