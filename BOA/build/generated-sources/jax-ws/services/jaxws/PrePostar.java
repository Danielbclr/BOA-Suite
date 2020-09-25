
package services.jaxws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

@XmlRootElement(name = "prePostar", namespace = "http://services/")
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "prePostar", namespace = "http://services/")
public class PrePostar {

    @XmlElement(name = "codigo", namespace = "")
    private String codigo;

    /**
     * 
     * @return
     *     returns String
     */
    public String getCodigo() {
        return this.codigo;
    }

    /**
     * 
     * @param codigo
     *     the value for the codigo property
     */
    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

}
