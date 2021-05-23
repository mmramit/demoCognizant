package com.store.ecommerce.beans;



import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.TypeAlias;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "producers")
@TypeAlias(value = "Producer")
public class Producer {
    @Id
    private String id;

	public Producer(String name) {
		this.name = name;
	}

	private String name;
    //private Address address;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

//	//public Address getAddress() {
//		return address;
//	}

//	//public void setAddress(Address address) {
//		this.address = address;
//	}

//	@Override
//	public String toString() {
//		return "Producer{" +
//				"id='" + id + '\'' +
//				", name='" + name + '\'' +
//				", address=" + address +
//				'}';
//	}


}
