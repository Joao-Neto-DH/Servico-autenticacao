import * as voucher from "voucher-code-generator";

type GerarSenhaOptions = {
  padrao: string;
  tamanho: number;
};

export class GeradorSenha {
  private constructor() {}

  /**
   * gerar
   */
  public static gerar({ padrao, tamanho }: Partial<GerarSenhaOptions> = {}) {
    const [code] = voucher.generate({
      charset: "0123456789",
      length: tamanho || 6,
      count: 1,
      pattern: padrao,
    });

    return code;
  }
}
