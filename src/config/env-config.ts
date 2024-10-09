export function envConfig() {
  return {
    PORT: Number(process.env.PORT),
    TOKEN_RECUPERACAO_PASSWORD: process.env.TOKEN_RECUPERACAO_PASSWORD,
    TOKEN_RECUPERACAO_SALT: process.env.TOKEN_RECUPERACAO_SALT,
  };
}

export const getSanitzedConfig = (config: {
  [key: string]: string | undefined;
}) => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined || value === null) {
      throw new Error(`Variável ${key} não definido em .env`);
    }
  }
};

export const enviroment: Readonly<typeof envConfig> = envConfig();
