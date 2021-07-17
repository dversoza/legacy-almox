import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Barraca } from 'src/app/models/barraca.model';

@Injectable({
  providedIn: 'root',
})
export class BarracaService {
  private apiServeUrl: string = '';

  constructor(private http: HttpClient) {}

  public getBarracas(): Observable<Barraca[]> {
    return this.http.get<Barraca[]>(`${this.apiServeUrl}/barracas`);
  }

  public getBarracaById(idBarraca: number): Observable<Barraca> {
    return this.http.get<Barraca>(`${this.apiServeUrl}/barracas/${idBarraca}`);
  }

  public addBarraca(barraca: Barraca): Observable<Barraca> {
    return this.http.post<Barraca>(
      `${this.apiServeUrl}/barracas/criar`,
      barraca
    );
  }

  public updateBarraca(barraca: Barraca): Observable<Barraca> {
    return this.http.put<Barraca>(
      `${this.apiServeUrl}/barracas/atualizar`,
      barraca
    );
  }

  public deleteBarraca(idBarraca: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiServeUrl}/barracas/excluir/${idBarraca}`
    );
  }
}
