import { TestBed, inject } from '@angular/core/testing';

import { HostService } from './host.service';

describe('HostService', () => {
  let hostService: HostService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HostService],
    });
    hostService = TestBed.get(HostService);
  });

  it('should be created', inject([HostService], (service: HostService) => {
    expect(service).toBeTruthy();
  }));

  it('should correctly format non-local hosts', () => {
    expect(hostService.getHost('host', 'https:')).toEqual('https://host');
  });

  it('should correctly format localhost as dev url when url is not frontend localhost', () => {
    expect(
      hostService.getHost(
        'localhost',
        'https:',
        '4200',
        'http://localhost:4200/iuwratingmanager'
      )
    ).toEqual(hostService.devUrl);
  });

  it('should correctly format localhost as local url when href is local frontend', () => {
    expect(
      hostService.getHost(
        'localhost',
        'https:',
        '4200',
        'http://localhost:4200/frontend'
      )
    ).toEqual(hostService.localUrl);
  });

  it('should return dev url', () => {
    expect(hostService.getHost('dev3-iunderwrite.lmig.com', 'https:')).toEqual(
      'https://dev3-iunderwrite.lmig.com'
    );
  });

  it('should return test url', () => {
    expect(hostService.getHost('test3-iunderwrite.lmig.com', 'https:')).toEqual(
      'https://test3-iunderwrite.lmig.com'
    );
  });

  it('should return stage url', () => {
    expect(hostService.getHost('stage-iunderwrite.lmig.com', 'https:')).toEqual(
      'https://stage-iunderwrite.lmig.com'
    );
  });

  it('should return prod url', () => {
    expect(hostService.getHost('iunderwrite.lmig.com', 'https:')).toEqual(
      'https://iunderwrite.lmig.com'
    );
  });
});
