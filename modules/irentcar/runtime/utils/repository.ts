import type { CarData } from "#irentcar/types/irentcar";

const baseUrl = "/irentcar/v1";

export const irentcarRepository = {
  async show(slug: string, params = {}): Promise<{ data: CarData }> {
    const { $apiFetch } = useNuxtApp();
    return $apiFetch<{ data: CarData }>(`${baseUrl}/irentcar/${slug}`, {
      method: "GET",
      params,
    });
  },

  async index(params = {}): Promise<{ data: CarData[] }> {
    const { $apiFetch } = useNuxtApp();
    return $apiFetch<{ data: CarData[] }>(`${baseUrl}/irentcar`, {
      method: "GET",
      params,
    });
  },

  async statuses(params = {}): Promise<{ data: CarData[] }> {
    const { $apiFetch } = useNuxtApp();
    return $apiFetch<{ data: CarData[] }>(`${baseUrl}/irentcar/statuses`, {
      method: "GET",
      params,
    });
  },
  async offices(params = {}): Promise<{ data: CarData[] }> {
    const { $apiFetch } = useNuxtApp();
    return $apiFetch<{ data: CarData[] }>(`${baseUrl}/irentcar/offices`, {
      method: "GET",
      params,
    });
  },
  async extras(params = {}): Promise<{ data: CarData[] }> {
    const { $apiFetch } = useNuxtApp();
    return $apiFetch<{ data: CarData[] }>(`${baseUrl}/irentcar/extras`, {
      method: "GET",
      params,
    });
  },
  async transmissionTypes(params = {}): Promise<{ data: CarData[] }> {
    const { $apiFetch } = useNuxtApp();
    return $apiFetch<{ data: CarData[] }>(
      `${baseUrl}/irentcar/transmission-types`,
      {
        method: "GET",
        params,
      },
    );
  },
  async fuelTypes(params = {}): Promise<{ data: CarData[] }> {
    const { $apiFetch } = useNuxtApp();
    return $apiFetch<{ data: CarData[] }>(`${baseUrl}/irentcar/fuel-types`, {
      method: "GET",
      params,
    });
  },
  async vehicleTypes(params = {}): Promise<{ data: CarData[] }> {
    const { $apiFetch } = useNuxtApp();
    return $apiFetch<{ data: CarData[] }>(`${baseUrl}/irentcar/vehicle-types`, {
      method: "GET",
      params,
    });
  },
  async gammas(params = {}): Promise<{ data: CarData[] }> {
    const { $apiFetch } = useNuxtApp();
    return $apiFetch<{ data: CarData[] }>(`${baseUrl}/irentcar/gammas`, {
      method: "GET",
      params,
    });
  },
};
