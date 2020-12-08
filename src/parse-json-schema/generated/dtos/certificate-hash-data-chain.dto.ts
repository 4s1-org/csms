import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { CertificateHashDataDto } from './certificate-hash-data.dto'
import { GetCertificateIdUseEnumDto } from './get-certificate-id-use-enum.dto'

export class CertificateHashDataChainDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public certificateHashData: CertificateHashDataDto

  @ApiProperty()
  public certificateType: GetCertificateIdUseEnumDto

  @IsOptional()
  @ApiProperty()
  public childCertificateHashData: any
}
