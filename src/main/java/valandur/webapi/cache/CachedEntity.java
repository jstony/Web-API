package valandur.webapi.cache;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.JsonNode;
import org.spongepowered.api.Sponge;
import org.spongepowered.api.entity.Entity;
import org.spongepowered.api.world.World;
import valandur.webapi.json.JsonConverter;

import java.util.Optional;
import java.util.UUID;

public class CachedEntity extends CachedObject {

    @JsonProperty
    public String type;

    @JsonProperty("class")
    public String clazz;

    @JsonProperty
    public String uuid;

    @JsonProperty
    public JsonNode location;

    public JsonNode rotation;
    public JsonNode scale;


    public CachedEntity(Entity entity) {
        this.type = entity.getType() != null ? entity.getType().getId() : null;
        this.clazz = entity.getClass().getName();
        this.uuid = entity.getUniqueId().toString();
        this.location = JsonConverter.toJson(new CachedLocation(entity.getLocation()));

        this.rotation = JsonConverter.toJson(entity.getRotation());
        this.scale = JsonConverter.toJson(entity.getScale());

        this.data = JsonConverter.dataHolderToJson(entity);
    }

    @Override
    public int getCacheDuration() {
        return CacheConfig.durationEntity;
    }
    @Override
    public Optional<?> getLive() {
        for (World w : Sponge.getServer().getWorlds()) {
            Optional<Entity> e = w.getEntity(UUID.fromString(uuid));
            if (e.isPresent())
                return Optional.of(e.get());
        }
        return Optional.empty();
    }

    @Override
    @JsonProperty
    public String getLink() {
        return "/api/entity/" + uuid;
    }
}
