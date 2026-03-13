// Interfaces para tipagem
export interface GaleriaItem {
  id: number;
  nomeEvento: string;
  fotoCapa: string;
  fotos: string[];
}

interface GaleriaApiResponse {
  data: Array<{
    id: number;
    nome: string;
    fotos: string[];
  }>;
}

// Configuração da API
const API_BASE_URL = 'http://localhost:3001/api';

// Função utilitária para transformar os dados da API
const transformGaleriaData = (apiData: GaleriaApiResponse['data']): GaleriaItem[] => {
  return apiData.map(item => ({
    id: item.id,
    nomeEvento: item.nome,
    fotoCapa: item.fotos[0] || '../../assets/images/logo_protecao.png',
    fotos: item.fotos
  }));
};

// Classe de erro personalizada para o serviço
export class GaleriaServiceError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
    this.name = 'GaleriaServiceError';
  }
}

// Função principal do serviço
export const galeriaService = {

  async listarGaleria(): Promise<GaleriaItem[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/galeria/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new GaleriaServiceError(
          `Erro ao buscar galeria: ${response.status} ${response.statusText}`,
          response.status
        );
      }

      const data: GaleriaApiResponse = await response.json();
      
      if (!data.data || !Array.isArray(data.data)) {
        throw new GaleriaServiceError('Formato de resposta da API inválido');
      }

      return transformGaleriaData(data.data);
      
    } catch (error) {
      if (error instanceof GaleriaServiceError) {
        throw error;
      }
      
      // Tratar erros de rede ou outros erros
      if (error instanceof Error) {
        throw new GaleriaServiceError(`Erro de conexão: ${error.message}`);
      }
      
      throw new GaleriaServiceError('Erro desconhecido ao buscar galeria');
    }
  },

  async buscarPorId(id: number): Promise<GaleriaItem | null> {
    try {
      const itens = await this.listarGaleria();
      return itens.find(item => item.id === id) || null;
    } catch (error) {
      throw error; // Repassa o erro do listarGaleria
    }
  }
};

// Export default para compatibilidade
export default galeriaService;